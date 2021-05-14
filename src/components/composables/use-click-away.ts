import { inBrowser } from '../utils'
import { useEventListener } from './use-event-listener'

export type UseClickAwayOptions = {
  eventName?: string
}

export function useClickAway(
  element: Element | null,
  listener: EventListener,
  options: UseClickAwayOptions = {}
) {
  if (!inBrowser) {
    return
  }

  const { eventName = 'click' } = options

  const onClick = (event: Event) => {
    if (element && !element.contains(event.target as Node)) {
      listener(event)
    }
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEventListener(eventName, onClick, { target: document })
}
