import React, { useRef, useState, CSSProperties, useMemo } from 'react'
import {
  createNamespace,
  isHidden,
  unitToPx,
  getScrollTop,
  getZIndexStyle
} from '../utils'
import { StickyProps } from './types'
import {
  getRect,
  useScrollParent,
  useEventListener,
  useVisibilityChange
} from '../composables'

const [bem] = createNamespace('sticky')
const Sticky: React.FC<StickyProps> = ({
  zIndex,
  container = null,
  offsetTop = 0,
  offsetBottom = 0,
  position = 'top',
  scroll,
  children
}: StickyProps) => {
  const root = useRef<HTMLDivElement>(null)
  const scrollParent = useScrollParent(root)
  const [state, setState] = useState({
    fixed: false,
    width: 0, // root width
    height: 0, // root height
    transform: 0
  })
  const offset = useMemo(
    () => unitToPx(position === 'top' ? offsetTop : offsetBottom),
    [position, offsetTop, offsetBottom]
  )
  const rootStyle = useMemo((): CSSProperties | undefined => {
    const { fixed, height, width } = state
    if (fixed) {
      return {
        width: `${width}px`,
        height: `${height}px`
      }
    }
  }, [state])
  const stickyStyle = useMemo((): CSSProperties | undefined => {
    if (!state.fixed) {
      return
    }

    const style: CSSProperties = {
      ...getZIndexStyle(zIndex),
      width: `${state.width}px`,
      height: `${state.height}px`,
      [position]: `${offset}px`
    }

    if (state.transform) {
      style.transform = `translate3d(0, ${state.transform}px, 0)`
    }

    return style
  }, [state, zIndex, position, offsetTop, offsetBottom])
  const onScroll = () => {
    if (!root.current || isHidden(root.current)) {
      return
    }
    const rootRect = getRect(root)
    const scrollTop = getScrollTop(window)
    const curState = {
      fixed: false,
      width: 0,
      height: 0,
      transform: 0
    }
    curState.width = rootRect.width
    curState.height = rootRect.height

    if (position === 'top') {
      if (container) {
        const containerRect = getRect(container)
        const difference = containerRect.bottom - offset - curState.height
        curState.fixed = offset > rootRect.top && containerRect.bottom > 0
        curState.transform = difference < 0 ? difference : 0
      } else {
        curState.fixed = offset > rootRect.top
      }
    } else {
      const { clientHeight } = document.documentElement
      if (container) {
        const containerRect = getRect(container)
        const difference =
          clientHeight - containerRect.top - offset - curState.height
        curState.fixed =
          clientHeight - offset < rootRect.bottom &&
          clientHeight > containerRect.top
        curState.transform = difference < 0 ? -difference : 0
      } else {
        curState.fixed = clientHeight - offset < rootRect.bottom
      }
    }
    setState(curState)
    scroll &&
      scroll({
        scrollTop,
        isFixed: curState.fixed
      })
  }
  useEventListener('scroll', onScroll, { target: scrollParent.current })
  useVisibilityChange(root, onScroll)
  return (
    <div style={rootStyle} ref={root}>
      <div className={bem({ fixed: state.fixed })} style={stickyStyle}>
        {children}
      </div>
    </div>
  )
}

export default React.memo(Sticky)
