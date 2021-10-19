import React, {
  CSSProperties,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from 'react'
import { TabsHandler, TabsProps, TabsState } from './types'
import {
  addUnit,
  BORDER_TOP_BOTTOM,
  callInterceptor,
  createNamespace,
  getElementTop,
  getVisibleHeight,
  getVisibleTop,
  isDef,
  isHidden,
  setRootScrollTop,
  unitToPx
} from '../utils'
import {
  useEventListener,
  useRefs,
  useScrollParent,
  useSyncCallback,
  useWatch,
  useWindowSize
} from '../composables'
import { TabsContext } from '../context'
import { scrollLeftTo, scrollTopTo } from './utils'
import TabsTitle from './TabsTitle'
import Sticky from '../Sticky'
import TabsContent from './TabsContent'
import AnimateTab from '../Tab/animateTab'

const [bem] = createNamespace('tabs')
const Tabs = (fieldProps: TabsProps, ref: React.Ref<TabsHandler>) => {
  const props: TabsProps = {
    style: {},
    className: '',
    ellipsis: true,
    lazyRender: true,
    type: 'line',
    active: 0,
    duration: 0.3,
    offsetTop: 0,
    swipeThreshold: 5,
    ...fieldProps
  }
  const { style, className } = props
  const children = Array.isArray(props.children)
    ? props.children
    : [props.children]
  const tabHeight = useRef<number>()
  const lockScroll = useRef<boolean>()
  const stickyFixed = useRef<boolean>()

  const root = useRef<HTMLDivElement>()
  const navRef = useRef<HTMLDivElement>()
  const wrapRef = useRef<HTMLDivElement>()

  const scroller = useScrollParent(root)
  const [titleRefs, setTitleRefs] = useRefs<HTMLDivElement>()
  const [tabRefs, setTabRefs] = useRefs<HTMLDivElement>()

  const [state, setState] = useState<TabsState>({
    inited: false,
    position: '',
    lineStyle: {},
    currentIndex: -1
  })
  const scrollable = children.length > props.swipeThreshold || !props.ellipsis
  const navStyle = useMemo(
    () => ({
      borderColor: props.color,
      background: props.background
    }),
    [props.color, props.background]
  )
  const getTabName = (tab: any, index: number): number | string =>
    tab.props.name ?? index

  const currentName = useMemo(() => {
    if (state.currentIndex !== -1) {
      const activeTab = children[state.currentIndex]

      if (activeTab) {
        return getTabName(activeTab, state.currentIndex)
      }
    }
  }, [state.currentIndex])

  const offsetTopPx = useMemo(() => unitToPx(props.offsetTop), [
    props.offsetTop
  ])

  const scrollOffset = props.sticky ? offsetTopPx + tabHeight.current : 0

  const scrollIntoView = useSyncCallback((immediate?: boolean) => {
    const nav = navRef.current
    const titles = titleRefs.current

    if (!scrollable || !nav || !titles || !titles[state.currentIndex]) {
      return
    }

    const title = titles[state.currentIndex]
    const to = title.offsetLeft - (nav.offsetWidth - title.offsetWidth) / 2

    scrollLeftTo(nav, to, immediate ? 0 : +props.duration)
  })

  const setLine = () => {
    const shouldAnimate = state.inited
    const titles = titleRefs.current

    if (
      !titles ||
      !titles[state.currentIndex] ||
      props.type !== 'line' ||
      isHidden(root.current!)
    ) {
      return
    }

    const title = titles[state.currentIndex]
    const { lineWidth, lineHeight } = props
    const left = title.offsetLeft + title.offsetWidth / 2

    const lineStyle: CSSProperties = {
      width: addUnit(lineWidth),
      backgroundColor: props.color,
      transform: `translateX(${left}px) translateX(-50%)`
    }

    if (shouldAnimate) {
      lineStyle.transitionDuration = `${props.duration}s`
    }

    if (isDef(lineHeight)) {
      const height = addUnit(lineHeight)
      lineStyle.height = height
      lineStyle.borderRadius = height
    }

    setState((prevState) => ({
      ...prevState,
      lineStyle
    }))
  }

  const findAvailableTab = (index: number) => {
    const diff = index < state.currentIndex ? -1 : 1
    while (index >= 0 && index < children.length) {
      if (!children[index].props.disabled) {
        return index
      }

      index += diff
    }
  }

  const setCurrentIndex = (currentIndex: number) => {
    const newIndex = findAvailableTab(currentIndex)
    if (!isDef(newIndex)) {
      return
    }

    const newTab = children[newIndex]
    const newName = getTabName(newTab, newIndex)
    const shouldEmitChange = state.currentIndex !== null

    setState((prevState) => ({
      ...prevState,
      currentIndex: newIndex
    }))

    if (newName !== props.active) {
      props.updateActive && props.updateActive(newName)

      if (shouldEmitChange) {
        props.change && props.change(newName, newTab.props.title)
      }
    }
  }

  const setCurrentIndexByName = (name: number | string) => {
    const matched = children.find(
      (tab, index) => getTabName(tab, index) === name
    )

    const index = matched ? children.indexOf(matched) : 0
    setCurrentIndex(index)
  }

  const scrollToCurrentContent = useSyncCallback((immediate = false) => {
    if (props.scrollspy) {
      const target = tabRefs.current[state.currentIndex]
      if (target && scroller.current) {
        const to = getElementTop(target, scroller.current) - scrollOffset
        lockScroll.current = true
        scrollTopTo(
          scroller.current,
          to,
          immediate ? 0 : +props.duration,
          () => {
            lockScroll.current = false
          }
        )
      }
    }
  })

  const onClick = (item: any, index: number) => {
    const { title, disabled } = children[index].props
    const name = getTabName(children[index], index)

    if (disabled) {
      props.disabledFunc && props.disabledFunc(name, title)
    } else {
      callInterceptor({
        interceptor: props.beforeChange,
        args: [name],
        done: () => {
          setCurrentIndex(index)
          scrollToCurrentContent()
        }
      })
      props.click && props.click(name, title)
    }
  }

  const onStickyScroll = (params: { isFixed: boolean; scrollTop: number }) => {
    stickyFixed.current = params.isFixed
    props.scroll && props.scroll(params)
  }

  const scrollTo = (name: number | string) => {
    setCurrentIndexByName(name)
    scrollToCurrentContent(true)
  }

  const getCurrentIndexOnScroll = () => {
    for (let index = 0; index < children.length; index++) {
      const top = getVisibleTop(tabRefs.current[index])

      if (top > scrollOffset) {
        return index === 0 ? 0 : index - 1
      }
    }

    return children.length - 1
  }

  const onScroll = () => {
    if (props.scrollspy && !lockScroll.current) {
      const index = getCurrentIndexOnScroll()
      setCurrentIndex(index)
    }
  }

  const init = useSyncCallback(() => {
    setState((prevState) => ({
      ...prevState,
      inited: true
    }))
    tabHeight.current = getVisibleHeight(wrapRef.current!)
    scrollIntoView(true)
  })

  const onRendered = (name: string | number, title?: string) =>
    props.rendered && props.rendered(name, title)

  const renderNav = () => {
    return children.map((item, index) => (
      <TabsTitle
        key={index}
        ref={setTitleRefs(index)}
        dot={item.props.dot}
        type={props.type}
        badge={item.props.badge}
        title={item.props.title}
        color={props.color}
        style={item.props.titleStyle}
        className={item.props.titleClass}
        isActive={index === state.currentIndex}
        disabled={item.props.disabled}
        scrollable={scrollable}
        customTitle={item.props.customTitle}
        activeColor={props.titleActiveColor}
        inactiveColor={props.titleInactiveColor}
        click={() => {
          onClick(item, index)
        }}
      />
    ))
  }

  const renderHeader = () => {
    const { type, border } = props
    return (
      <div
        ref={wrapRef}
        className={`${bem('wrap', { scrollable })} ${
          type === 'line' && border ? BORDER_TOP_BOTTOM : ''
        }`}
      >
        <div
          ref={navRef}
          role='tablist'
          className={bem('nav', [type, { complete: scrollable }])}
          style={navStyle}
        >
          {props.navLeft}
          {renderNav()}
          {type === 'line' && (
            <div className={bem('line')} style={state.lineStyle} />
          )}
          {props.navRight}
        </div>
      </div>
    )
  }

  useImperativeHandle(ref, () => ({
    resize: setLine,
    scrollTo
  }))

  useEventListener('scroll', onScroll, { target: scroller })

  useWindowSize({
    widthChange: () => setLine()
  })

  useWatch(props.color, setLine)

  useWatch(props.active, (value) => {
    if (value !== currentName) {
      setCurrentIndexByName(value)
    }
  })

  useWatch(children.length, () => {
    if (state.inited) {
      setCurrentIndexByName(props.active)
      setLine()
      scrollIntoView(true)
    }
  })

  useWatch(state.currentIndex, () => {
    scrollIntoView()
    setLine()

    // scroll to correct position
    if (stickyFixed.current && !props.scrollspy) {
      setRootScrollTop(Math.ceil(getElementTop(root.current!) - offsetTopPx))
    }
  })

  useEffect(() => {
    setCurrentIndexByName(props.active)
    init()
  }, [])

  return (
    <TabsContext.Provider
      value={{
        props,
        setLine,
        onRendered,
        currentName,
        scrollIntoView
      }}
    >
      <div
        ref={root}
        style={style}
        className={`${bem([props.type])} ${className || ''}`}
      >
        {props.sticky ? (
          <Sticky
            container={root.current}
            offsetTop={offsetTopPx}
            scroll={onStickyScroll}
          >
            {renderHeader()}
          </Sticky>
        ) : (
          renderHeader()
        )}
        <TabsContent
          count={children.length}
          inited={state.inited}
          animated={props.animated}
          duration={props.duration}
          swipeable={props.swipeable}
          lazyRender={props.lazyRender}
          currentIndex={state.currentIndex}
          change={setCurrentIndex}
        >
          {React.Children.map(children, (child: any, index: number) => {
            if (props.animated || props.swipeable) {
              return <AnimateTab index={index}>{child}</AnimateTab>
            }
            return React.cloneElement(child, {
              ref: setTabRefs(index),
              index
            })
          })}
        </TabsContent>
      </div>
    </TabsContext.Provider>
  )
}
export default React.memo(React.forwardRef(Tabs))
