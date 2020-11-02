/* eslint-disable no-empty */
/* eslint-disable getter-return */
/* eslint-disable import/no-mutable-exports */
export type EventHandler = (event: Event) => void
export let supportsPassive = false

try {
  const opts = {}
  Object.defineProperty(opts, 'passive', {
    get() {
      supportsPassive = true
    }
  })
  window.addEventListener('test-passive', null as any, opts)
} catch (e) {}

export function on(
  target: EventTarget,
  event: string,
  handler: EventHandler,
  passive = false
) {
  target.addEventListener(
    event,
    handler,
    supportsPassive ? { capture: false, passive } : false
  )
}

export function off(target: EventTarget, event: string, handler: EventHandler) {
  target.removeEventListener(event, handler)
}

export function stopPropagation(event: Event) {
  event.stopPropagation()
}

export function preventDefault(event: Event, isStopPropagation?: boolean) {
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault()
  }

  if (isStopPropagation) {
    stopPropagation(event)
  }
}
