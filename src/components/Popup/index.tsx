/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  MouseEvent,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from 'react'
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
    iconPrefix,
    transition,
    transitionAppear = false,
    safeAreaInsetBottom = false,
    teleport,
    teleportClassName,
    teleportStyle,
    click,
    close,
    opened,
    closed,
    updateShow,
    clickOverlay,
    clickCloseIcon
  }: PopupProps,
  ref: React.Ref<PopupHandler>
) => {
  const isOpen = useRef(false)
  const isCenter = position === 'center'
  const [pzIndex, setPzIndex] = useState<number>(globalZIndex)
  const popupRef = useRef<HTMLDivElement>(null)

  const transitionName =
    transition ||
    (isCenter ? `${BASE_PREFIX}fade` : `${BASE_PREFIX}popup-slide-${position}`)
  const popupStyle = useMemo(() => {
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
  }, [pzIndex, duration, position])
  const open = () => {
    if (!isOpen.current) {
      if (zIndex !== undefined) {
        globalZIndex = +zIndex
      }

      isOpen.current = true
      setPzIndex(++globalZIndex)
    }
  }
  const popupClassName = bem([
    { round },
    { [position]: position },
    { 'safe-area-inset-bottom': safeAreaInsetBottom }
  ])
  const closePopup = () => {
    if (isOpen.current) {
      isOpen.current = false
      close && close()
      updateShow && updateShow(false)
      if (lockScroll) {
        document.body.classList.remove(`${BASE_PREFIX}overflow-hidden`)
      }
    }
  }
  const onClickOverlay = (event: MouseEvent) => {
    clickOverlay && clickOverlay(event)
    if (closeOnClickOverlay) {
      closePopup()
    }
  }

  const onClickCloseIcon = (event: MouseEvent) => {
    clickCloseIcon && clickCloseIcon(event)
    closePopup()
  }

  const renderCloseIcon = () => {
    if (closeable) {
      return (
        <Icon
          name={closeIcon}
          className={bem(`close-icon`, [{ [closeIconPosition]: true }])}
          classPrefix={iconPrefix}
          click={onClickCloseIcon}
        />
      )
    }
  }
  const renderPopup = () => {
    return (
      <div
        ref={popupRef}
        style={{ ...popupStyle, ...style }}
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
          click={onClickOverlay}
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
export default React.memo(React.forwardRef(Popup))
