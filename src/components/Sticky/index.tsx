import React, { useState, useEffect, CSSProperties } from 'react'
import { BASE_PREFIX } from '../utils/constant'
import { unitToPx } from '../utils/format/unit'
import { isHidden } from '../utils/dom/style'
import { isDef } from '../utils'
import classnames from '../utils/classNames'
import { getScrollTop, getElementTop, getScroller } from '../utils/dom/scroll'
import { on, off } from '../utils/dom/event'
import { StickyProps } from './index.types'

const baseClass = `${BASE_PREFIX}sticky`
const Sticky = ({
  zIndex,
  container = null,
  offsetTop,
  scroll,
  children
}: StickyProps) => {
  const [fixed, setFixed] = useState(false)
  const [height, setHeight] = useState(0)
  const [transform, setTransform] = useState(0)
  const [observer, setObserver] = useState<IntersectionObserver | null>(null)
  let $el!: HTMLDivElement
  let scroller: HTMLElement | Window
  const handleScroll = () => {
    if ($el && isHidden($el)) return
    const curHeight = $el.offsetHeight
    let curTransform = 0
    let curFixed = false
    const offsetTopPx = offsetTop ? unitToPx(offsetTop) : 0
    const scrollTop = getScrollTop(window)
    const topToPageTop = getElementTop($el)
    if (container) {
      const bottomToPageTop = topToPageTop + container.offsetHeight
      if (scrollTop + offsetTopPx + curHeight > bottomToPageTop) {
        const distanceToBottom = curHeight + scrollTop - bottomToPageTop
        if (distanceToBottom < curHeight) {
          curFixed = true
          curTransform = -(distanceToBottom + offsetTopPx)
        } else {
          curFixed = false
        }
        setHeight(curHeight)
        setFixed(curFixed)
        setTransform(curTransform)
        scroll && scroll(scrollTop, curFixed)
        return
      }
    }
    if (scrollTop + offsetTopPx > topToPageTop) {
      curFixed = true
      curTransform = 0
    } else {
      curFixed = false
    }
    setHeight(curHeight)
    setFixed(curFixed)
    setTransform(curTransform)
    scroll && scroll(scrollTop, curFixed)
  }

  const initObserver = () => {
    const options = { root: document.body }
    const Observer = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio > 0) {
        handleScroll()
      }
    }, options)
    Observer.observe($el)
    setObserver(Observer)
  }

  const resetObservation = () => {
    observer && observer.unobserve($el)
  }

  const renderEle = (ele: any) => {
    if (ele) $el = ele
  }

  const getStyle = () => {
    const style: CSSProperties = {}
    const offsetTopTrans = offsetTop ? unitToPx(offsetTop) : null
    if (!fixed) {
      return style
    }
    if (isDef(zIndex)) style.zIndex = zIndex
    if (offsetTopTrans && fixed) style.top = `${offsetTopTrans}px`
    if (transform) style.transform = `translate3d(0, ${transform}px, 0)`
    return style
  }

  useEffect(() => {
    if (!scroller) {
      scroller = getScroller($el)
    }
    initObserver()
    on(scroller, 'scroll', handleScroll, true)
    handleScroll()

    return () => {
      resetObservation()
      scroller && off(scroller, 'scroll', handleScroll)
    }
  }, [container])
  const pStyle: CSSProperties = {}
  if (fixed) pStyle.height = `${height}px`
  const className = classnames(baseClass, [{ fixed }])
  return (
    <div style={pStyle} ref={renderEle}>
      <div className={className} style={getStyle()}>
        {children}
      </div>
    </div>
  )
}

export default Sticky
