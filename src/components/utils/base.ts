/* eslint-disable @typescript-eslint/no-unused-vars */
export const inBrowser = typeof window !== 'undefined'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function noop(_e?: any) {}

export function isDef(val: unknown): boolean {
  return val !== undefined && val !== null
}

export function isFunction(val: unknown): val is Function {
  return typeof val === 'function'
}

export function isObject(val: unknown): val is Record<any, any> {
  return val !== null && typeof val === 'object'
}

export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch)
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
  keys: ReadonlyArray<U>,
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

function rafPolyfill(fn: (...args: any[]) => void) {
  let prev = Date.now()
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
