import { inBrowser } from '../utils'
import useEventListener from './use-event-listener'
import { useRef } from 'react'

export function usePageVisibility() {
  const visibility = useRef<VisibilityState>('visible')

  const setVisibility = () => {
    if (inBrowser) {
      visibility.current = document.hidden ? 'hidden' : 'visible'
    }
  }

  setVisibility()
  useEventListener('visibilitychange', setVisibility)

  return visibility
}
