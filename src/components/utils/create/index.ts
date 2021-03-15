import { createBEM } from './bem'
import { createTranslate } from './translate'
import { BASE_PREFIX } from '../constant'

export function createNamespace(name: string) {
  const prefixedName = `${BASE_PREFIX}${name}`
  return [createBEM(prefixedName), createTranslate(prefixedName)] as const
}
