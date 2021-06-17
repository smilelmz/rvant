import { useRef } from 'react'
import { inBrowser } from '../utils'
import useEventListener from './use-event-listener'

export function useWindowSize() {
  const width = useRef(inBrowser ? window.innerWidth : 0)
  const height = useRef(inBrowser ? window.innerHeight : 0)

  const onResize = () => {
    width.current = window.innerWidth
    height.current = window.innerHeight
  }

  useEventListener('resize', onResize)
  useEventListener('orientationchange', onResize)

  return { width, height }
}
