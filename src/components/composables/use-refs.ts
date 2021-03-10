import { useRef } from 'react'

export function useRefs<T = Element>() {
  const refs = useRef<T[]>([])

  const setRefs = (index: number) => (el: unknown) => {
    refs.current[index] = el as T
  }

  return [refs, setRefs] as const
}
