/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'
import { PopupProps, PopupHandler } from './index.types'
import { isDef, isBoolean, createNamespace, BASE_PREFIX } from '../utils'
import Icon from '../Icon'
import Overlay from '../Overlay'
import CreatePortal from '../CreatePortal'
import { useEventListener } from '../composables'

const [bem] = createNamespace('popup')
let globalZIndex = 2000
const Popup = (
  {
    children,
    show = false,
    className = '',
    style = {},
    zIndex,
    overlay = true,
    overlayClass,
    overlayStyle = {},
    position = 'center',
    duration,
    round = false,
    lockScroll = true,
    closeOnClickOverlay = true,
    closeable = false,
    closeIcon = 'cross',
    closeIconPosition = 'top-right',
    closeOnPopstate = true,
    transition,
    transitionAppear = false,
    safeAreaInsetBottom = false,
    teleport,
    teleportClassName,
    teleportStyle,
    click,
    close,
    opened,
    closed
  }: PopupProps,
  ref: React.Ref<PopupHandler>
) => {
  let isOpen: boolean
  const isCenter = position === 'center'
  const [pzIndex, setPzIndex] = useState<number>(globalZIndex)
  const popupRef = useRef<HTMLDivElement>(null)

  const transitionName =
    transition ||
    (isCenter ? `${BASE_PREFIX}fade` : `${BASE_PREFIX}popup-slide-${position}`)
  const getStyle = () => {
    const popupStyle: Record<any, string> = {
      zIndex: `${pzIndex}`
    }
    if (isDef(duration)) {
      const key = isCenter ? 'animationDuration' : 'transitionDuration'
      popupStyle[key] = `${duration}s`
    }
    if (show && lockScroll) {
      document.body.classList.add(`${BASE_PREFIX}overflow-hidden`)
    }
    return popupStyle
  }
  const open = () => {
    if (!isOpen) {
      if (zIndex !== undefined) {
        globalZIndex = +zIndex
      }

      isOpen = true
      setPzIndex(++globalZIndex)
    }
  }
  const popupClassName = bem([
    { round },
    { [position]: position },
    { 'safe-area-inset-bottom': safeAreaInsetBottom }
  ])
  const closePopup = () => {
    isOpen = false
    close && close()
    if (lockScroll) {
      document.body.classList.remove(`${BASE_PREFIX}overflow-hidden`)
    }
  }
  const cickOverlay = () => {
    if (closeOnClickOverlay) {
      closePopup()
    }
  }
  const renderCloseIcon = () => {
    if (closeable) {
      return (
        <Icon
          name={closeIcon}
          className={bem(`close-icon`, [{ [closeIconPosition]: true }])}
          click={closePopup}
        />
      )
    }
  }
  const renderPopup = () => {
    return (
      <div
        ref={popupRef}
        style={{ ...getStyle(), ...style }}
        className={`${popupClassName} ${className}`}
        onClick={click}
      >
        {children}
        {renderCloseIcon()}
      </div>
    )
  }
  const renderOverlay = () => {
    if (overlay) {
      return (
        <Overlay
          show={show}
          duration={0.3}
          className={overlayClass}
          zIndex={pzIndex}
          customStyle={overlayStyle}
          click={() => closeOnClickOverlay && cickOverlay()}
          lockScroll={lockScroll}
        />
      )
    }
  }
  const renderTransition = () => {
    return (
      <CSSTransition
        in={show}
        classNames={transitionName}
        timeout={{
          exit: 300,
          enter: 10,
          appear: 10
        }}
        unmountOnExit={true}
        appear={transitionAppear}
        onEntered={() => opened && opened()}
        onExited={onExited}
      >
        {renderPopup()}
      </CSSTransition>
    )
  }
  const onExited = () => {
    closed && closed()
  }
  useEffect(() => {
    if (show) {
      open()
    } else {
      closePopup()
    }
  }, [show])
  useEventListener('popstate', () => {
    if (closeOnPopstate) {
      closePopup()
    }
  })
  useImperativeHandle(ref, () => ({
    popupRef
  }))
  if (teleport) {
    const teleportEle = !isBoolean(teleport)
      ? (teleport as HTMLElement)
      : undefined
    return (
      <CreatePortal
        el={teleportEle}
        style={teleportStyle}
        className={teleportClassName}
      >
        {renderOverlay()}
        {renderTransition()}
      </CreatePortal>
    )
  }

  return (
    <>
      {renderOverlay()}
      {renderTransition()}
    </>
  )
}
export default React.forwardRef(Popup)
