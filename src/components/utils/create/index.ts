import { createBEM } from './bem'
import { createTranslate } from './translate'

export function createNamespace(name: string) {
  name = `van-${name}`
  return [createBEM(name), createTranslate(name)] as const
}
