export { addUnit } from './format/unit'
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

export function delay(ms: number = 100) {
  return new Promise((r) => {
    setTimeout(r, ms)
  })
}
