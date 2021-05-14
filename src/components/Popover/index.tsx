import React, { useRef, useEffect } from 'react'
import { PopoverAction, PopoverProps } from './index.types'
import { extend, BORDER_BOTTOM, createNamespace } from '../utils'
import { Instance } from '@popperjs/core'
import { createPopper } from '@popperjs/core/lib/popper-lite'
import offsetModifier from '@popperjs/core/lib/modifiers/offset'
import Icon from '../Icon'
import { useClickAway, useWatch } from '../composables'
import Popup from '../Popup'
import { PopupHandler } from '../Popup/index.types'

const [bem] = createNamespace('popover')
const Popover = ({
  style = {},
  className = '',
  show,
  overlay = false,
  duration,
  overlayClass,
  overlayStyle,
  offset = [0, 8],
  theme = 'light',
  trigger = 'click',
  actions = [],
  placement = 'bottom',
  closeOnClickAction = true,
  closeOnClickOverlay = true,
  closeOnClickOutside = true,
  reference,
  children,
  select,
  updateShow
}: PopoverProps) => {
  const popper = useRef<Instance>()
  const wrapperRef = useRef<HTMLSpanElement>(null)
  const popoverRef = useRef<PopupHandler>(null)

  const createPopperInstance = () => {
    return createPopper(
      wrapperRef.current!,
      popoverRef.current!.popupRef.current as HTMLElement,
      {
        placement,
        modifiers: [
          {
            name: 'computeStyles',
            options: {
              adaptive: false,
              gpuAcceleration: false
            }
          },
          extend({}, offsetModifier, {
            options: {
              offset
            }
          })
        ]
      }
    )
  }
  const updateLocation = () => {
    if (!show) {
      return
    }

    if (!popper.current) {
      popper.current = createPopperInstance()
    } else {
      popper.current.setOptions({
        placement
      })
    }
  }
  const updateStatus = (status: boolean) => {
    updateShow && updateShow(status)
  }
  const onClickWrapper = () => {
    if (trigger === 'click') {
      updateStatus(!show)
    }
  }
  const onClickAction = (action: PopoverAction, index: number) => {
    if (action.disabled) {
      return
    }

    select && select(action, index)

    if (closeOnClickAction) {
      updateStatus(false)
    }
  }

  const onClickAway = () => {
    if (closeOnClickOutside && (!overlay || closeOnClickOverlay)) {
      updateStatus(false)
    }
  }
  const renderAction = (action: PopoverAction, index: number) => {
    const { icon, text, color, disabled, className } = action
    return (
      <div
        key={index}
        role='menuitem'
        className={`${bem('action', {
          disabled,
          'with-icon': icon
        })} ${className || ''}`}
        style={{ color }}
        onClick={() => onClickAction(action, index)}
      >
        {icon && <Icon name={icon} className={bem('action-icon')} />}
        <div className={`${bem('action-text')} ${BORDER_BOTTOM}`}>{text}</div>
      </div>
    )
  }
  useEffect(() => {
    updateLocation()
    return () => {
      if (popper.current) {
        popper.current.destroy()
        popper.current = undefined
      }
    }
  }, [])
  useWatch([show, placement], updateLocation)
  useClickAway(wrapperRef.current, onClickAway, { eventName: 'touchstart' })

  const popupProps = {
    show,
    overlay,
    duration,
    overlayStyle,
    overlayClass,
    closeOnClickOverlay
  }
  return (
    <>
      <span
        ref={wrapperRef}
        className={bem('wrapper')}
        onClick={onClickWrapper}
      >
        {reference}
      </span>
      <Popup
        ref={popoverRef}
        className={`${bem([theme])} ${className}`}
        style={style}
        position={''}
        transition='van-popover-zoom'
        lockScroll={false}
        {...popupProps}
        closed={() => {
          if (popper.current) {
            popper.current!.destroy()
            popper.current = undefined
          }
        }}
      >
        <div className={bem('arrow')} />
        <div role='menu' className={bem('content')}>
          {children || actions.map(renderAction)}
        </div>
      </Popup>
    </>
  )
}
export default Popover
