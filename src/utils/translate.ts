import { get, isFunction } from '..'
import { camelize } from '../format/string'

export function createTranslate(name: string) {
  const prefix = `${camelize(name)}.`

  return (messages: Record<string, any>, path: string, ...args: any[]): any => {
    const message = get(messages, prefix + path) || get(messages, path)
    return isFunction(message) ? message(...args) : message
  }
}

export type Translate = ReturnType<typeof createTranslate>
