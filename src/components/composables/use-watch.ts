import { useRef, useEffect } from 'react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Callback<T> = (prev: T | undefined) => void
type Config = {
  immediate: boolean
}

export function useWatch<T>(
  dep: T,
  callback: Callback<T>,
  config: Config = { immediate: false }
) {
  const { immediate } = config

  const prev = useRef<T>()
  const inited = useRef(false)
  const stop = useRef(false)

  useEffect(() => {
    const execute = () => callback(prev.current)

    if (!stop.current) {
      if (!inited.current) {
        inited.current = true
        if (immediate) {
          execute()
        }
      } else {
        execute()
      }
      prev.current = dep
    }
  }, [dep])

  return () => {
    stop.current = true
  }
}
