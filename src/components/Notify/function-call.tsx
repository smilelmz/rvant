import React from 'react'
import { createNotification, extend, inBrowser, isObject } from '../utils'
import VanNotify from './Notify'
import { NotifyMessage, NotifyOptions } from './types'

let timer: number
let instance: any

const parseOptions = (message: NotifyMessage | NotifyOptions) =>
  isObject(message) ? message : { message }

function initInstance() {
  ;({ instance } = createNotification({
    render: (state, toggle) => <VanNotify {...state} updateShow={toggle} />
  }))
}

function Notify(options: NotifyMessage | NotifyOptions) {
  if (!inBrowser) {
    return
  }

  if (!instance) {
    initInstance()
  }

  options = extend({}, Notify.currentOptions, parseOptions(options))

  instance.open(options)
  clearTimeout(timer)

  if (options.duration! > 0) {
    timer = window.setTimeout(Notify.clear, options.duration * 1000)
  }

  return instance
}

const getDefaultOptions = (): NotifyOptions => ({
  type: 'danger',
  color: undefined,
  message: '',
  onClose: undefined,
  onClick: undefined,
  onOpened: undefined,
  duration: 3,
  className: '',
  lockScroll: false,
  background: undefined
})

Notify.clear = () => {
  if (instance) {
    instance.toggle(false)
  }
}

Notify.currentOptions = getDefaultOptions()

Notify.setDefaultOptions = (options: NotifyOptions) => {
  extend(Notify.currentOptions, options)
}

Notify.resetDefaultOptions = () => {
  Notify.currentOptions = getDefaultOptions()
}

export { Notify }
