import React from 'react'

/* eslint-disable @typescript-eslint/no-unused-vars */
export const inBrowser = typeof window !== 'undefined'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function noop(_e?: any) {}

export const extend = Object.assign

export function isDef(val: unknown): boolean {
  return val !== undefined && val !== null
}

export function isFunction(val: unknown): boolean {
  return typeof val === 'function'
}

export function isBoolean(val: unknown): boolean {
  return typeof val === 'boolean'
}

export function isObject(val: unknown): val is Record<any, any> {
  return val !== null && typeof val === 'object'
}

export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch)
}

export function isElement(el: any) {
  if (Array.isArray(el)) {
    for (let i = 0; i < el.length; i++) {
      if (React.isValidElement(el[i])) return true
    }
  } else if (React.isValidElement(el)) return true
  return false
}

export function get(object: any, path: string): any {
  const keys = path.split('.')
  let result = object

  keys.forEach((key) => {
    result = isDef(result[key]) ? result[key] : ''
  })

  return result
}

export function pick<T, U extends keyof T>(
  obj: T,
  keys: readonly U[],
  ignoreUndefined?: boolean
) {
  return keys.reduce((ret, key) => {
    if (!ignoreUndefined || obj[key] !== undefined) {
      // eslint-disable-next-line no-param-reassign
      ret[key] = obj[key]
    }
    return ret
  }, {} as Pick<T, U>)
}

export function delay(ms: number = 100) {
  return new Promise((r) => {
    setTimeout(r, ms)
  })
}
let prev = Date.now()
function rafPolyfill(fn: (...args: any[]) => void) {
  const curr = Date.now()
  const ms = Math.max(0, 16 - (curr - prev))
  const id = setTimeout(fn, ms)
  prev = curr + ms
  return id
}
export function raf(fn: FrameRequestCallback) {
  const root = inBrowser ? window : global
  const requestAnimationFrame = root.requestAnimationFrame || rafPolyfill
  return requestAnimationFrame.call(root, fn)
}
export function doubleRaf(fn: FrameRequestCallback) {
  raf(() => {
    raf(fn)
  })
}

export function cancelRaf(id: number) {
  const root = inBrowser ? window : global
  const cancelAnimationFrame = root.cancelAnimationFrame || root.clearTimeout
  cancelAnimationFrame.call(root, id)
}
