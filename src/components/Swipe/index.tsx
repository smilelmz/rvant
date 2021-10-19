import React, {
  CSSProperties,
  TouchEvent,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from 'react'
import { StateType, SwipeHandler, SwipeProps, SwipeToOptions } from './types'
import {
  createNamespace,
  doubleRaf,
  isHidden,
  preventDefault,
  range
} from '../utils'
import {
  usePageVisibility,
  useRefs,
  useTouch,
  useWatch,
  useWindowSize
} from '../composables'
import { SwipeContext } from '../context'
import { SwipeItemHandler } from '../SwipeItem/types'

const [bem] = createNamespace('swipe')
const Swipe = (fieldProps: SwipeProps, ref: React.Ref<SwipeHandler>) => {
  const props: SwipeProps = {
    style: {},
    className: '',
    loop: true,
    touchable: true,
    showIndicators: true,
    stopPropagation: true,
    autoplay: 0,
    duration: 500,
    initialSwipe: 0,
    ...fieldProps
  }
  const { style, className, children } = props
  const root = useRef<HTMLDivElement>()
  const [itemRefs, setItemRefs] = useRefs<SwipeItemHandler>()
  const [state, setState] = useState<StateType>({
    rect: null as { width: number; height: number } | null,
    width: 0,
    height: 0,
    offset: 0,
    active: 0,
    swiping: false
  })
  const activeRef = useRef(0)
  const swipingRef = useRef(false)
  const autoplayTimer = useRef<NodeJS.Timeout>()
  const touchStartTime = useRef<number>(Date.now())
  const touch = useTouch()
  const windowSize = useWindowSize()
  const visibility = usePageVisibility()

  const count = useRef(0)
  count.current = itemRefs.current.length
  const size = useRef(0)
  size.current = state[props.vertical ? 'height' : 'width']
  const minOffset = useRef(0)
  minOffset.current = state.rect
    ? (props.vertical ? state.rect.height : state.rect.width) -
      size.current * count.current
    : 0
  const maxCount = useRef(0)
  maxCount.current = size.current
    ? Math.ceil(Math.abs(minOffset.current) / size.current)
    : 0
  const trackSize = count.current * size.current
  const activeIndicator = (state.active + count.current) % count.current
  const trackStyle = useMemo(() => {
    const style: CSSProperties = {
      transitionDuration: `${swipingRef.current ? 0 : props.duration}ms`,
      transform: `translate${props.vertical ? 'Y' : 'X'}(${state.offset}px)`
    }

    if (size.current) {
      const mainAxis = props.vertical ? 'height' : 'width'
      const crossAxis = props.vertical ? 'width' : 'height'
      style[mainAxis] = `${trackSize}px`
      style[crossAxis] = props[crossAxis] ? `${props[crossAxis]}px` : ''
    }
    return style
  }, [
    props.duration,
    props.vertical,
    props.width,
    props.height,
    swipingRef.current,
    state.offset
  ])

  const getTargetActive = (pace: number) => {
    if (pace) {
      if (props.loop) {
        return range(activeRef.current + pace, -1, count.current)
      }
      return range(activeRef.current + pace, 0, maxCount.current)
    }
    return activeRef.current
  }

  const getTargetOffset = (targetActive: number, offset = 0) => {
    let currentPosition = targetActive * size.current
    if (!props.loop) {
      currentPosition = Math.min(currentPosition, -minOffset.current)
    }

    let targetOffset = offset - currentPosition
    if (!props.loop) {
      targetOffset = range(targetOffset, minOffset.current, 0)
    }

    return targetOffset
  }

  const move = ({
    pace = 0,
    offset = 0,
    emitChange
  }: {
    pace?: number
    offset?: number
    emitChange?: boolean
  }) => {
    if (count.current <= 1) {
      return
    }

    const targetActive = getTargetActive(pace)
    const targetOffset = getTargetOffset(targetActive, offset)

    // auto move first and last swipe in loop mode
    if (props.loop) {
      if (itemRefs.current[0] && targetOffset !== minOffset.current) {
        const outRightBound = targetOffset < minOffset.current
        itemRefs.current[0].setOffset(outRightBound ? trackSize : 0)
      }

      if (itemRefs.current[count.current - 1] && targetOffset !== 0) {
        const outLeftBound = targetOffset > 0
        itemRefs.current[count.current - 1].setOffset(
          outLeftBound ? -trackSize : 0
        )
      }
    }

    setState({
      ...state,
      offset: targetOffset,
      active: targetActive
    })

    if (emitChange && targetActive !== activeRef.current) {
      props.change && props.change(targetActive)
    }
    activeRef.current = targetActive
  }

  const correctPosition = () => {
    swipingRef.current = true
    if (activeRef.current <= -1) {
      move({ pace: count.current })
    } else if (activeRef.current >= count.current) {
      move({ pace: -count.current })
    }
  }

  // swipe to prev item
  const prev = () => {
    correctPosition()
    touch.reset()

    doubleRaf(() => {
      swipingRef.current = false
      move({
        pace: -1,
        emitChange: true
      })
    })
  }

  // swipe to next item
  const next = () => {
    correctPosition()
    touch.reset()

    doubleRaf(() => {
      swipingRef.current = false
      move({
        pace: 1,
        emitChange: true
      })
    })
  }

  const stopAutoplay = () => {
    clearTimeout(autoplayTimer.current)
  }

  const autoplay = () => {
    stopAutoplay()
    if (props.autoplay > 0 && count.current > 1) {
      autoplayTimer.current = setTimeout(() => {
        next()
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        autoplay()
      }, +props.autoplay)
    }
  }

  const initialize = (active = +props.initialSwipe) => {
    if (!root.current) {
      return
    }

    const newState = { ...state }

    if (!isHidden(root.current)) {
      const rect = {
        width: root.current.offsetWidth,
        height: root.current.offsetHeight
      }
      newState.rect = rect
      newState.width = +(props.width ?? rect.width)
      newState.height = +(props.height ?? rect.height)
    }

    if (count.current) {
      active = Math.min(count.current - 1, active)
    }

    activeRef.current = active
    swipingRef.current = true
    newState.offset = getTargetOffset(active)
    setState(newState)
    itemRefs.current.forEach((swipe) => {
      swipe.setOffset(0)
    })
  }

  const resize = () => initialize(activeRef.current)

  const onTouchStart = (event: TouchEvent) => {
    if (!props.touchable) return

    touch.start(event)
    touchStartTime.current = Date.now()

    stopAutoplay()
    correctPosition()
  }

  const onTouchMove = (event: TouchEvent) => {
    if (props.touchable && swipingRef.current) {
      const delta = props.vertical ? touch.deltaY.current : touch.deltaX.current
      const isCorrectDirection =
        touch.direction.current === (props.vertical ? 'vertical' : 'horizontal')
      touch.move(event)

      if (isCorrectDirection) {
        preventDefault(event, props.stopPropagation)
        move({ offset: delta })
      }
    }
  }

  const onTouchEnd = () => {
    if (!props.touchable || !swipingRef.current) {
      return
    }

    const delta = props.vertical ? touch.deltaY.current : touch.deltaX.current
    const isCorrectDirection =
      touch.direction.current === (props.vertical ? 'vertical' : 'horizontal')
    const duration = Date.now() - touchStartTime.current
    const speed = delta / duration
    const shouldSwipe =
      Math.abs(speed) > 0.25 || Math.abs(delta) > size.current / 2

    if (shouldSwipe && isCorrectDirection) {
      const offset = props.vertical
        ? touch.offsetY.current
        : touch.offsetX.current

      let pace = 0

      if (props.loop) {
        pace = offset > 0 ? (delta > 0 ? -1 : 1) : 0
      } else {
        pace = -Math[delta > 0 ? 'ceil' : 'floor'](delta / size.current)
      }

      move({
        pace,
        emitChange: true
      })
    } else if (delta) {
      move({ pace: 0 })
    }

    swipingRef.current = false
    autoplay()
  }

  const swipeTo = (index: number, options: SwipeToOptions = {}) => {
    correctPosition()
    touch.reset()

    doubleRaf(() => {
      let targetIndex
      if (props.loop && index === count.current) {
        targetIndex = activeRef.current === 0 ? 0 : index
      } else {
        targetIndex = index % count.current
      }

      if (options.immediate) {
        doubleRaf(() => {
          swipingRef.current = false
        })
      } else {
        swipingRef.current = false
      }

      move({
        pace: targetIndex - activeRef.current,
        emitChange: true
      })
    })
  }

  const renderDot = (_: number, index: number) => {
    const active = index === activeIndicator
    const style = active
      ? {
          backgroundColor: props.indicatorColor
        }
      : undefined

    return (
      <i key={index} style={style} className={bem('indicator', { active })} />
    )
  }

  const renderIndicator = () => {
    if (props.renderIndicator) {
      return props.renderIndicator({
        active: activeIndicator
      })
    }
    if (props.showIndicators && count.current > 1) {
      return (
        <div className={bem('indicators', { vertical: props.vertical })}>
          {Array(count.current)
            .fill('')
            .map(renderDot)}
        </div>
      )
    }
  }

  useImperativeHandle(ref, () => ({
    prev,
    next,
    state,
    resize,
    swipeTo
  }))

  useWatch(props.initialSwipe, (value) => initialize(+value))
  useWatch(count.current, () => initialize(activeRef.current))
  useWatch([count.current, props.autoplay], () => {
    autoplay()
  })
  useWatch([windowSize.width.current, windowSize.height.current], resize)
  useWatch(visibility.current, (visible) => {
    if (visible === 'visible') {
      autoplay()
    } else {
      stopAutoplay()
    }
  })

  useEffect(() => {
    initialize()
    return () => {
      stopAutoplay()
    }
  }, [])

  return (
    <SwipeContext.Provider
      value={{
        size: size.current,
        props,
        count: count.current,
        activeIndicator
      }}
    >
      <div ref={root} style={style} className={`${bem()} ${className || ''}`}>
        <div
          style={trackStyle}
          className={bem('track', { vertical: props.vertical })}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onTouchCancel={onTouchEnd}
        >
          {React.Children.map(children, (child: any, index: number) => {
            return React.cloneElement(child, {
              ref: setItemRefs(index)
            })
          })}
        </div>
        {renderIndicator()}
      </div>
    </SwipeContext.Provider>
  )
}
export default React.memo(React.forwardRef(Swipe))
