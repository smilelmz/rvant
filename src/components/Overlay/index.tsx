import React from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'
import { BASE_PREFIX } from '../utils/constant'
import { OverlayProps } from './index.types'
import { isDef, noop } from '../utils'
import { preventDefault } from '../utils/dom/event'
import classnames from '../utils/classNames'

const baseClass = `${BASE_PREFIX}overlay`
function preventTouchMove(event: any) {
  console.log(event)
  preventDefault(event, true)
}
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
  const overlayClassName = classnames(baseClass)
  const overlayStyle: Record<string, any> = {
    zIndex,
    ...customStyle
  }
  if (isDef(duration)) {
    overlayStyle.animationDuration = `${duration}s`
  }
  if (show && lockScroll) {
    document.body.classList.add(`${BASE_PREFIX}overflow-hidden`)
  }
  const onClick = () => {
    if (click && lockScroll) {
      document.body.classList.remove(`${BASE_PREFIX}overflow-hidden`)
      click && click()
    }
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
      <div
        className={`${overlayClassName} ${className}`}
        style={overlayStyle}
        onClick={onClick}
        onTouchMove={lockScroll ? preventTouchMove : noop}
      >
        {children}
      </div>
    </CSSTransition>
  )
}
export default Overlay
