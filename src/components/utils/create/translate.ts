import { get, isFunction } from '..'
import { camelize } from '../format/string'

export function createTranslate(messages, name: string) {
  const prefix = camelize(name) + '.'

  return function(path: string, ...args: any[]): any {
    const message = get(messages, prefix + path) || get(messages, path)

    return isFunction(message) ? message(...args) : message
  }
}

export type Translate = ReturnType<typeof createTranslate>
