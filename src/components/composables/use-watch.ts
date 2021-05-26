import { useRef, useEffect, useMemo } from 'react'

type Callback<T> = (current: T | undefined, prev: T | undefined) => void
type Config = {
  immediate: boolean
}

export function useWatch<T>(
  dep: T,
  callback: Callback<T>,
  config: Config = { immediate: false }
) {
  const { immediate } = config
  const curRef = useRef<T>()
  const prev = useRef<T>()
  const inited = useRef(false)
  const stop = useRef(false)

  const effectArr = useMemo(() => {
    if (Array.isArray(dep)) {
      return dep
    }
    return [dep]
  }, [dep])
  useEffect(() => {
    const execute = () => callback(curRef.current, prev.current)
    if (!stop.current) {
      curRef.current = dep
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
  }, effectArr)

  return () => {
    stop.current = true
  }
}
