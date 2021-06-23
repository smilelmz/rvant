import { useRef } from 'react'
import { inBrowser } from '../utils'
import useEventListener from './use-event-listener'

type ChangeEvent = {
  widthChange?: (width?: number) => void
  heightChange?: (height?: number) => void
}

export function useWindowSize(changeEvent: ChangeEvent = {}) {
  const { widthChange, heightChange } = changeEvent
  const width = useRef(inBrowser ? window.innerWidth : 0)
  const height = useRef(inBrowser ? window.innerHeight : 0)

  const onResize = () => {
    if (width.current !== window.innerWidth) {
      width.current = window.innerWidth
      widthChange && widthChange(window.innerWidth)
    }
    if (height.current !== window.innerHeight) {
      height.current = window.innerHeight
      heightChange && heightChange(window.innerWidth)
    }
  }

  useEventListener('resize', onResize)
  useEventListener('orientationchange', onResize)

  return { width, height }
}
