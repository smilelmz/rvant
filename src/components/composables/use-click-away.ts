import { useEffect, useRef } from 'react'
import { BasicTarget, getTargetElement } from '../utils'

const defaultEvent = 'click'

type EventType = MouseEvent | TouchEvent

export function useClickAway(
  onClickAway: (event: EventType) => void,
  target: BasicTarget | BasicTarget[],
  eventName: string = defaultEvent
) {
  const onClickAwayRef = useRef(onClickAway)
  onClickAwayRef.current = onClickAway

  useEffect(() => {
    const handler = (event: any) => {
      const targets = Array.isArray(target) ? target : [target]
      if (
        targets.some((targetItem) => {
          const targetElement = getTargetElement(targetItem) as HTMLElement
          return !targetElement || targetElement?.contains(event.target)
        })
      ) {
        return
      }
      onClickAwayRef.current(event)
    }

    document.addEventListener(eventName, handler)

    return () => {
      document.removeEventListener(eventName, handler)
    }
  }, [target, eventName])
}
