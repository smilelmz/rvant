import React, { CSSProperties, MouseEvent } from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'
import { OverlayProps } from './index.types'
import {
  isDef,
  noop,
  getZIndexStyle,
  createNamespace,
  BASE_PREFIX
} from '../utils'
import { preventDefault } from '../utils/dom/event'

const [bem] = createNamespace('overlay')
const Overlay: React.FC<OverlayProps> = ({
  children,
  show,
  zIndex = 2000,
  duration = 0.3,
  className = '',
  customStyle = {},
  lockScroll = true,
  click
}) => {
  const preventTouchMove = (event: any) => {
    preventDefault(event, true)
  }
  if (show && lockScroll) {
    document.body.classList.add(`${BASE_PREFIX}overflow-hidden`)
  }
  const onClick = (e: MouseEvent) => {
    if (lockScroll) {
      document.body.classList.remove(`${BASE_PREFIX}overflow-hidden`)
    }
    click && click(e)
  }
  const renderOverlay = () => {
    const style: CSSProperties = {
      ...getZIndexStyle(zIndex),
      ...customStyle
    }

    if (isDef(duration)) {
      style.animationDuration = `${duration}s`
    }
    return (
      <div
        className={`${bem()} ${className}`}
        style={style}
        onClick={onClick}
        onTouchMove={lockScroll ? preventTouchMove : noop}
      >
        {children}
      </div>
    )
  }
  return (
    <CSSTransition
      in={show}
      classNames={`${BASE_PREFIX}fade`}
      timeout={{
        exit: 300,
        enter: 10,
        appear: 10
      }}
      unmountOnExit
    >
      {renderOverlay()}
    </CSSTransition>
  )
}
export default React.memo(Overlay)
