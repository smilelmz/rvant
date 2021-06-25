import React, { TouchEvent, useRef, useState } from 'react'
import { PullRefreshProps, PullRefreshStatus } from './index.types'
import { createNamespace, getScrollTop, preventDefault } from '../utils'
import {
  useScrollParent,
  useSyncCallback,
  useTouch,
  useWatch
} from '../composables'
import { useI18n } from '../locale'
import Loading from '../Loading'

const [bem, t] = createNamespace('pull-refresh')
const DEFAULT_HEAD_HEIGHT = 50
const TEXT_STATUS = ['pulling', 'loosing', 'success']
const PullRefresh = (fieldProps: PullRefreshProps) => {
  const props: PullRefreshProps = {
    style: {},
    className: '',
    value: false,
    successDuration: 500,
    animationDuration: 300,
    headHeight: DEFAULT_HEAD_HEIGHT,
    ...fieldProps
  }
  const { style, className, children } = props
  const reachTop = useRef<boolean>()
  const root = useRef<HTMLDivElement>()
  const scrollParent = useScrollParent(root)
  const { messages } = useI18n()

  const [prStatus, setPrStatus] = useState<PullRefreshStatus>('normal')
  const [distance, setDistance] = useState(0)
  const [duration, setDuration] = useState(0)

  const touch = useTouch()

  const getHeadStyle = () => {
    if (props.headHeight !== DEFAULT_HEAD_HEIGHT) {
      return {
        height: `${props.headHeight}px`
      }
    }
  }

  const isTouchable = () =>
    prStatus !== 'loading' && prStatus !== 'success' && !props.disabled

  const ease = (distance: number) => {
    const pullDistance = +(props.pullDistance || props.headHeight)

    if (distance > pullDistance) {
      if (distance < pullDistance * 2) {
        distance = pullDistance + (distance - pullDistance) / 2
      } else {
        distance = pullDistance * 1.5 + (distance - pullDistance * 2) / 4
      }
    }

    return Math.round(distance)
  }

  const setStatus = (distance: number, isLoading?: boolean) => {
    const pullDistance = +(props.pullDistance || props.headHeight)
    setDistance(distance)

    if (isLoading) {
      setPrStatus('loading')
    } else if (distance === 0) {
      setPrStatus('normal')
    } else if (distance < pullDistance) {
      setPrStatus('pulling')
    } else {
      setPrStatus('loosing')
    }
  }

  const getStatusText = () => {
    if (prStatus === 'normal') {
      return ''
    }

    return props[`${prStatus}Text` as const] || t(messages, prStatus)
  }

  const renderStatus = () => {
    if (props[prStatus]) {
      return props[prStatus]!({ distance })
    }

    const nodes = []

    if (TEXT_STATUS.includes(prStatus)) {
      nodes.push(
        <div className={bem('text')} key={prStatus}>
          {getStatusText()}
        </div>
      )
    }
    if (prStatus === 'loading') {
      nodes.push(
        <Loading className={bem('loading')} key={'loading'}>
          {getStatusText()}
        </Loading>
      )
    }

    return nodes
  }

  const showSuccessTip = () => {
    setPrStatus('success')

    setTimeout(() => {
      setStatus(0)
    }, +props.successDuration)
  }

  const checkPosition = (event: TouchEvent) => {
    reachTop.current = getScrollTop(scrollParent.current!) === 0

    if (reachTop.current) {
      setDuration(0)
      touch.start(event)
    }
  }

  const refresh = useSyncCallback(() => props.refresh && props.refresh())

  const onTouchStart = (event: TouchEvent) => {
    if (isTouchable()) {
      checkPosition(event)
    }
  }

  const onTouchMove = (event: TouchEvent) => {
    if (isTouchable()) {
      if (!reachTop.current) {
        checkPosition(event)
      }

      const { deltaY } = touch
      touch.move(event)

      if (reachTop.current && deltaY.current >= 0 && touch.isVertical()) {
        preventDefault(event)
        setStatus(ease(deltaY.current))
      }
    }
  }

  const onTouchEnd = () => {
    if (reachTop.current && touch.deltaY.current && isTouchable()) {
      setDuration(+props.animationDuration)

      if (prStatus === 'loosing') {
        setStatus(+props.headHeight, true)
        props.change && props.change(true)

        // ensure value change can be watched
        refresh()
      } else {
        setStatus(0)
      }
    }
  }

  useWatch(props.value, (value) => {
    setDuration(+props.animationDuration)

    if (value) {
      setStatus(+props.headHeight, true)
    } else if (props.success || props.successText) {
      showSuccessTip()
    } else {
      setStatus(0, false)
    }
  })

  const trackStyle = {
    transitionDuration: `${duration}ms`,
    transform: distance ? `translate3d(0,${distance}px, 0)` : ''
  }

  return (
    <div ref={root} style={style} className={`${bem()} ${className || ''}`}>
      <div
        className={bem('track')}
        style={trackStyle}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
      >
        <div className={bem('head')} style={getHeadStyle()}>
          {renderStatus()}
        </div>
        {children}
      </div>
    </div>
  )
}
export default React.memo(PullRefresh)
