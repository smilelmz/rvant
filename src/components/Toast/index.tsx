/* eslint-disable no-param-reassign */
import React from 'react'
import createNotification from './notification'
import { BASE_PREFIX } from '../utils/constant'
import { ToastProps, ToastType, ToastPosition } from './index.types'
import classnames from '../utils/classNames'
import Toast from './toast'

const SHORT = 3

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
const prefixCls = `${BASE_PREFIX}toast`

const getMessageInstance = (
  mask: boolean,
  callback: (notification: any) => void
) => {
  console.log('getMessageInstance')
  const className = classnames(
    prefixCls,
    [{ [`mask`]: mask }, { [`nomask`]: !mask }],
    false
  )
  createNotification(
    {
      prefixCls,
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
  info: (message = '', duration = SHORT, position = '') => {
    const p = (position || 'middle') as ToastPosition
    const options = {
      ...defaultOptions,
      message,
      position: p,
      duration
    }
    showToast(options)
  },
  success: (message = '', duration = SHORT) => {
    const options = {
      ...defaultOptions,
      message,
      type: 'success' as ToastType,
      duration
    }
    showToast(options)
  },
  fail: (message = '', duration = SHORT) => {
    const options = {
      ...defaultOptions,
      message,
      type: 'fail' as ToastType,
      duration
    }
    showToast(options)
  },
  loading: (opts: ToastProps) => {
    const options = {
      ...defaultOptions,
      ...opts,
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
  config(conf: Partial<IToastConfig> = {}) {
    const { duration = SHORT, mask = true, position = 'middle' } = conf
    config.duration = duration
    config.position = position
    if (mask === false) {
      config.mask = false
    }
  }
}
