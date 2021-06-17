/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
import React from 'react'
import createNotification from './notification'
import { ToastProps, ToastType, ToastPosition } from './index.types'
import { createNamespace, BASE_PREFIX } from '../utils'
import Toast from './toast'

const SHORT = 3
const [bem] = createNamespace('toast')
interface IToastConfig {
  duration: number
  mask: boolean
  position: ToastPosition
}

const config: IToastConfig = {
  duration: SHORT,
  mask: true,
  position: 'middle'
}

const defaultOptions: ToastProps = {
  type: 'text',
  position: config.position,
  message: '',
  icon: '',
  iconSize: undefined,
  iconPrefix: undefined,
  mask: config.mask,
  loadingType: 'circular',
  duration: config.duration,
  className: '',
  onClose: undefined,
  onOpened: undefined
}

let messageInstance: any
let messageNeedHide: boolean

const getMessageInstance = (
  mask: boolean,
  callback: (notification: any) => void
) => {
  const className = bem([{ [`mask`]: mask }, { [`nomask`]: !mask }])
  createNotification(
    {
      style: {},
      transitionName: `${BASE_PREFIX}fade`,
      className: `${className}`
    },
    (notification: any) => callback && callback(notification)
  )
}

const showToast = ({
  type = 'text',
  position = config.position,
  message = '',
  icon = '',
  iconPrefix = undefined,
  mask = config.mask,
  loadingType = undefined,
  duration = config.duration,
  className = '',
  onOpened,
  onClose
}: ToastProps) => {
  messageNeedHide = false
  getMessageInstance(mask, (notification) => {
    if (!notification) {
      return null
    }
    if (messageInstance) {
      messageInstance.destroy()
      messageInstance = null
    }
    if (messageNeedHide) {
      notification.destroy()
      messageNeedHide = false
      return null
    }
    if (mask) {
      document.body.classList.add(`${BASE_PREFIX}overflow-hidden`)
    }
    const props = {
      type,
      position,
      message,
      loadingType,
      icon,
      iconPrefix,
      className
    }
    const content = <Toast {...props} />
    messageInstance = notification
    notification.notice({
      duration,
      style: {},
      content,
      closable: true,
      onClose() {
        if (onClose) {
          onClose()
        }
        document.body.classList.remove(`${BASE_PREFIX}overflow-hidden`)
        notification.destroy()
        notification = null
        messageInstance = null
      },
      onOpened() {
        if (onOpened) {
          onOpened()
        }
      }
    })
  })
}

export default {
  show: (opts: ToastProps) => {
    const options = {
      ...defaultOptions,
      ...opts
    }
    showToast(options)
  },
  info: (
    message = '',
    duration = SHORT,
    position = '',
    extra: ToastProps = {}
  ) => {
    const p = (position || 'middle') as ToastPosition
    const options = {
      ...defaultOptions,
      ...extra,
      message,
      position: p,
      duration
    }
    showToast(options)
  },
  success: (message = '', duration = SHORT, extra: ToastProps = {}) => {
    const options = {
      ...defaultOptions,
      ...extra,
      message,
      type: 'success' as ToastType,
      duration
    }
    showToast(options)
  },
  fail: (message = '', duration = SHORT, extra: ToastProps = {}) => {
    const options = {
      ...defaultOptions,
      ...extra,
      message,
      type: 'fail' as ToastType,
      duration
    }
    showToast(options)
  },
  loading: (opts: ToastProps = {}, extra: ToastProps = {}) => {
    const options = {
      ...defaultOptions,
      ...opts,
      ...extra,
      type: 'loading' as ToastType
    }
    showToast(options)
  },
  hide: () => {
    if (messageInstance) {
      messageInstance.destroy()
      messageInstance = null
    } else {
      messageNeedHide = true
    }
  },
  setDefaultConfig(conf: Partial<IToastConfig> = {}) {
    const { duration = SHORT, mask = true, position = 'middle' } = conf
    config.duration = duration
    config.position = position
    if (mask === false) {
      config.mask = false
    }
  }
}
