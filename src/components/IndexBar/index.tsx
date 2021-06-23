import React, {
  MouseEvent,
  MutableRefObject,
  TouchEvent,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from 'react'
import { IndexBarHandler, IndexBarProps } from './index.types'
import {
  createNamespace,
  getRootScrollTop,
  getScrollTop,
  isBoolean,
  isDef,
  isHidden,
  preventDefault,
  setRootScrollTop
} from '../utils'
import { IndexBarContext } from '../context'
import {
  getRect,
  useEventListener,
  useRefs,
  useScrollParent,
  useTouch,
  useWatch
} from '../composables'
import CreatePortal from '../CreatePortal'
import { IndexAnchorHandler } from '../IndexAnchor/index.types'

const genAlphabet = () => {
  const charCodeOfA = 'A'.charCodeAt(0)
  const indexList = Array(26)
    .fill('')
    .map((_, i) => String.fromCharCode(charCodeOfA + i))

  return indexList
}

const [bem] = createNamespace('index-bar')
const IndexBar = (
  fieldProps: IndexBarProps,
  indexBarRef: React.Ref<IndexBarHandler>
) => {
  const props: IndexBarProps = {
    style: {},
    className: '',
    stickyOffsetTop: 0,
    sticky: true,
    indexList: genAlphabet(),
    ...fieldProps
  }
  const { style, className } = props
  const children = Array.isArray(props.children)
    ? props.children
    : [props.children]
  const root = useRef<HTMLDivElement>()
  const [activeAnchor, setActiveAnchor] = useState<any>()
  const touchActiveIndex = useRef<number | string>()
  const [itemRefs, setItemRefs] = useRefs<IndexAnchorHandler>()

  const touch = useTouch()
  const scrollParent = useScrollParent(root)

  const sidebarStyle = useMemo(() => {
    if (isDef(props.zIndex)) {
      return {
        zIndex: +props.zIndex + 1
      }
    }
  }, [props.zIndex])

  const highlightStyle = useMemo(() => {
    if (props.highlightColor) {
      return {
        color: props.highlightColor
      }
    }
  }, [props.highlightColor])

  const getScrollerRect = () => {
    if ('getBoundingClientRect' in scrollParent.current!) {
      return getRect(scrollParent as MutableRefObject<HTMLElement>)
    }
    return {
      top: 0,
      left: 0
    }
  }

  const getActiveAnchor = (
    scrollTop: number,
    rects: { top: number; height: number }[]
  ) => {
    for (let i = children.length - 1; i >= 0; i--) {
      const prevHeight = i > 0 ? rects[i - 1].height : 0
      const reachTop = props.sticky ? prevHeight + props.stickyOffsetTop : 0

      if (scrollTop + reachTop >= rects[i].top) {
        return i
      }
    }

    return -1
  }

  const onScroll = () => {
    if (isHidden(root.current)) {
      return
    }
    const { sticky, indexList } = props
    const scrollTop = getScrollTop(scrollParent.current!)
    const scrollParentRect = getScrollerRect()
    const rects = itemRefs.current.map((item) =>
      item.getRect(scrollParent.current, scrollParentRect)
    )
    const active = getActiveAnchor(scrollTop, rects)
    setActiveAnchor(indexList[active])
    if (sticky) {
      itemRefs.current.forEach((item, index) => {
        const { state, $el, setState } = item
        const newState = { ...state }
        if (index === active || index === active - 1) {
          const rect = $el.getBoundingClientRect()
          newState.left = rect.left
          newState.width = rect.width
        } else {
          newState.left = null
          newState.width = null
        }
        if (index === active) {
          newState.active = true
          newState.top =
            Math.max(props.stickyOffsetTop, rects[index].top - scrollTop) +
            scrollParentRect.top
        } else if (index === active - 1) {
          const activeItemTop = rects[active].top - scrollTop
          newState.active = activeItemTop > 0
          newState.top =
            activeItemTop + scrollParentRect.top - rects[index].height
        } else {
          newState.active = false
        }
        setState(newState)
      })
    }
  }

  const init = () => onScroll()

  useEventListener('scroll', onScroll, { target: scrollParent })

  useEffect(() => {
    init()
  }, [])

  useWatch(props.indexList, init)

  useWatch(activeAnchor, (value) => {
    if (value) {
      props.change && props.change(value)
    }
  })

  useImperativeHandle(indexBarRef, () => ({
    scrollTo
  }))

  const scrollTo = (index: string) => {
    if (!index) {
      return
    }
    const match = itemRefs.current.find((item) => String(item.index) === index)
    console.log(match)
    if (match) {
      match.$el.scrollIntoView()
      if (props.sticky && props.stickyOffsetTop) {
        setRootScrollTop(getRootScrollTop() - props.stickyOffsetTop)
      }
      props.select && props.select(match.index)
    }
  }

  const scrollToElement = (element: HTMLElement) => {
    const { index } = element.dataset

    if (index) {
      scrollTo(index)
    }
  }

  const onClickSidebar = (event: MouseEvent) => {
    scrollToElement(event.target as HTMLElement)
  }

  const onTouchMove = (event: TouchEvent) => {
    touch.move(event)

    if (touch.isVertical()) {
      preventDefault(event)

      const { clientX, clientY } = event.touches[0]
      const target = document.elementFromPoint(clientX, clientY) as HTMLElement
      if (target) {
        const { index } = target.dataset

        if (index && touchActiveIndex.current !== index) {
          touchActiveIndex.current = index
          scrollToElement(target)
        }
      }
    }
  }

  const renderIndexes = () =>
    props.indexList.map((index) => {
      const active = index === activeAnchor
      return (
        <span
          className={bem('index', { active })}
          style={active ? highlightStyle : undefined}
          data-index={index}
          key={index}
        >
          {index}
        </span>
      )
    })

  const renderSidebar = () => (
    <div
      className={bem('sidebar')}
      style={sidebarStyle}
      onClick={onClickSidebar}
      onTouchStart={touch.start}
      onTouchMove={onTouchMove}
    >
      {renderIndexes()}
    </div>
  )

  const renderContent = () => {
    return (
      <div ref={root} style={style} className={`${bem()} ${className || ''}`}>
        {renderSidebar()}
        {React.Children.map(children, (child: any, index: number) => {
          return React.cloneElement(child, {
            ref: setItemRefs(index)
          })
        })}
      </div>
    )
  }

  if (props.teleport) {
    const teleportEle = !isBoolean(props.teleport)
      ? (props.teleport as HTMLElement)
      : undefined
    return (
      <IndexBarContext.Provider value={{ props }}>
        <CreatePortal
          el={teleportEle}
          style={props.teleportStyle}
          className={props.teleportClassName}
        >
          {renderContent()}
        </CreatePortal>
      </IndexBarContext.Provider>
    )
  }
  return (
    <IndexBarContext.Provider value={{ props }}>
      {renderContent()}
    </IndexBarContext.Provider>
  )
}
export default React.memo(React.forwardRef(IndexBar))
