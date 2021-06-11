import React, {
  MouseEvent,
  TouchEvent,
  useImperativeHandle,
  useRef,
  useState
} from 'react'
import {
  SwipeCellPosition,
  SwipeCellProps,
  SwipeCellSide,
  SwiperCellHandle
} from './index.types'
import {
  callInterceptor,
  createNamespace,
  isDef,
  preventDefault,
  range
} from '../utils'
import { getRect, useClickAway, useTouch } from '../composables'

const [bem] = createNamespace('swipe-cell')
const SwipeCell = (
  fieldProps: SwipeCellProps,
  ref: React.Ref<SwiperCellHandle>
) => {
  const props: SwipeCellProps = {
    style: {},
    className: '',
    name: '',
    ...fieldProps
  }
  const { style, className, children } = props
  const opened = useRef(false)
  const lockClick = useRef(false)
  const startOffset = useRef(0)

  const root = useRef<HTMLDivElement>()
  const leftRef = useRef<HTMLDivElement>()
  const rightRef = useRef<HTMLDivElement>()

  const [offset, setOffset] = useState(0)
  const [dragging, setDragging] = useState(false)

  const touch = useTouch()

  const getWidthByRef = (
    ref: React.MutableRefObject<HTMLElement | undefined>
  ) => (ref.current ? getRect(ref).width : 0)

  const leftWidth = isDef(props.leftWidth)
    ? +props.leftWidth
    : getWidthByRef(leftRef)

  const rightWidth = isDef(props.rightWidth)
    ? +props.rightWidth
    : getWidthByRef(rightRef)

  const open = (side: SwipeCellSide) => {
    opened.current = true
    setOffset((side === 'left' ? leftWidth : -rightWidth) as number)
    props.open &&
      props.open({
        name: props.name,
        position: side
      })
  }

  const close = (position: SwipeCellPosition) => {
    setOffset(0)
    if (opened.current) {
      opened.current = false
      props.close &&
        props.close({
          name: props.name,
          position
        })
    }
  }

  const toggle = (side: SwipeCellSide) => {
    const curOffset = Math.abs(offset)
    const THRESHOLD = 0.15
    const threshold = opened.current ? 1 - THRESHOLD : THRESHOLD
    const width = ((side === 'left'
      ? leftWidth
      : rightWidth) as unknown) as number
    if (width && curOffset > width * threshold) {
      open(side)
    } else {
      close(side)
    }
  }

  const onTouchStart = (event: TouchEvent) => {
    if (!props.disabled) {
      startOffset.current = offset
      touch.start(event)
    }
  }

  const onTouchMove = (event: TouchEvent) => {
    if (props.disabled) {
      return
    }

    const { deltaX } = touch
    touch.move(event)

    if (touch.isHorizontal()) {
      lockClick.current = true
      setDragging(true)

      const isEdge = !opened.current || deltaX.current * startOffset.current < 0
      if (isEdge) {
        preventDefault(event, props.stopPropagation)
      }
      setOffset(
        range(deltaX.current + startOffset.current, -rightWidth, leftWidth)
      )
    }
  }

  const onTouchEnd = () => {
    if (dragging) {
      setDragging(false)
      toggle(offset > 0 ? 'left' : 'right')

      // compatible with desktop scenario
      setTimeout(() => {
        lockClick.current = false
      }, 0)
    }
  }

  const onClick = (position: SwipeCellPosition = 'outside') => {
    props.click && props.click(position)

    if (opened.current && !lockClick.current) {
      callInterceptor({
        interceptor: props.beforeClose,
        args: [
          {
            name: props.name,
            position
          }
        ],
        done: () => close(position)
      })
    }
  }

  const getClickHandler = (position: SwipeCellPosition, stop?: boolean) => (
    event: MouseEvent
  ) => {
    if (stop) {
      event.stopPropagation()
    }
    onClick(position)
  }

  const renderSideContent = (
    side: SwipeCellSide,
    ref: React.MutableRefObject<HTMLDivElement | undefined>
  ) => {
    if (props[side]) {
      return (
        <div
          ref={ref}
          className={bem(side)}
          onClick={getClickHandler(side, true)}
        >
          {props[side]}
        </div>
      )
    }
  }

  useClickAway(() => onClick('outside'), root, 'touchstart')

  const wrapperStyle = {
    transform: `translate3d(${offset}px, 0, 0)`,
    transitionDuration: dragging ? '0s' : '.6s'
  }

  useImperativeHandle(ref, () => ({
    open,
    close
  }))

  return (
    <div
      ref={root}
      className={`${bem()} ${className}`}
      style={style}
      onClick={() => getClickHandler('cell')}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onTouchCancel={onTouchEnd}
    >
      <div className={bem('wrapper')} style={wrapperStyle}>
        {renderSideContent('left', leftRef)}
        {children}
        {renderSideContent('right', rightRef)}
      </div>
    </div>
  )
}
export default React.memo(React.forwardRef(SwipeCell))
