import { useEffect } from 'react'
import { inBrowser } from '../utils'

let supportsPassive = false
if (inBrowser) {
  try {
    const opts = {}
    Object.defineProperty(opts, 'passive', {
      get() {
        supportsPassive = true
      }
    })
    window.addEventListener('test-passive', null as any, opts)
    // eslint-disable-next-line no-empty
  } catch (e) {}
}

export type UseEventListenerOptions = {
  target?: EventTarget
  capture?: boolean
  passive?: boolean
}

export function useEventListener(
  type: string,
  listener: EventListener,
  options: UseEventListenerOptions = {}
) {
  const { target = window, passive = false, capture = false } = options
  let attached: boolean
  const add = () => {
    if (inBrowser && target && !attached) {
      target.addEventListener(
        type,
        listener,
        supportsPassive ? { capture, passive } : capture
      )
      attached = true
    }
  }

  const remove = () => {
    if (inBrowser && target && attached) {
      target.removeEventListener(type, listener, capture)
      attached = false
    }
  }

  useEffect(() => {
    add()
    return () => {
      remove()
    }
  })
}
