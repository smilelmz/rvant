import React from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'
// import { on, off } from '../utils/dom/event'
import { BASE_PREFIX } from '../utils/constant'
import { PopupProps } from './index.types'
import classnames from '../utils/classNames'
import { isDef } from '../utils'
import Icon from '../Icon'
import Overlay from '../Overlay'

const baseClass = `${BASE_PREFIX}popup`
const Popup: React.FC<PopupProps> = ({
  children,
  show = false,
  className = '',
  style = {},
  overlay = true,
  overlayClass,
  overlayStyle = {},
  position = 'center',
  duration = 0.3,
  round = false,
  lockScroll = true,
  closeOnClickOverlay = true,
  closeable = false,
  closeIcon = 'cross',
  closeIconPosition = 'top-right',
  transition,
  transitionAppear = false,
  safeAreaInsetBottom = false,
  click,
  close,
  opened,
  closed
}) => {
  const isCenter = position === 'center'
  const transitionName =
    transition ||
    (isCenter ? `${BASE_PREFIX}fade` : `${BASE_PREFIX}popup-slide-${position}`)
  const popupStyle: Record<any, string> = {}
  if (isDef(duration)) {
    const key = isCenter ? 'animationDuration' : 'transitionDuration'
    popupStyle[key] = `${duration}s`
  }
  if (show && lockScroll) {
    document.body.classList.add(`${BASE_PREFIX}overflow-hidden`)
  }
  const popupClassName = classnames(baseClass, [
    { round },
    { [position]: position },
    { 'safe-area-inset-bottom': safeAreaInsetBottom }
  ])
  const cickOverlay = () => {
    if (closeOnClickOverlay) {
      close && close()
    }
  }
  const closePopup = () => {
    if (close && lockScroll) {
      document.body.classList.remove(`${BASE_PREFIX}overflow-hidden`)
      close && close()
    }
  }
  return (
    <div>
      {overlay && (
        <Overlay
          show={show}
          duration={0.3}
          className={overlayClass}
          customStyle={overlayStyle}
          click={() => closeOnClickOverlay && cickOverlay()}
          lockScroll={lockScroll}
        />
      )}
      <CSSTransition
        in={show}
        classNames={transitionName}
        timeout={{
          exit: 300,
          enter: 10,
          appear: 10
        }}
        unmountOnExit
        appear={transitionAppear}
        onEntered={() => opened && opened()}
        onExited={() => closed && closed()}
      >
        <div
          style={{ ...popupStyle, ...style }}
          className={`${popupClassName} ${className}`}
          onClick={click}
        >
          {children}
          {closeable && (
            <Icon
              name={closeIcon}
              className={classnames(`${baseClass}__close-icon`, [
                { [closeIconPosition]: true }
              ])}
              click={closePopup}
            />
          )}
        </div>
      </CSSTransition>
    </div>
  )
}
export default Popup
