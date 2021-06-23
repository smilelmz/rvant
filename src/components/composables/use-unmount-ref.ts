import { useRef, useEffect } from 'react'

export const useUnmountedRef = () => {
  const unmountedRef = useRef(false)
  useEffect(() => {
    return () => {
      unmountedRef.current = true
    }
  }, [])
  return unmountedRef
}
