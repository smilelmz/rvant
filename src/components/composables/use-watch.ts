/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect } from 'react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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

  let effectArr = []
  if (Array.isArray(dep)) {
    effectArr = dep
  } else {
    effectArr = [dep]
  }
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
