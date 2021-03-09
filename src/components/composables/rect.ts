import { Ref } from 'react'

function isWindow(val: unknown): val is Window {
  return val === window
}

export const getRect = (
  elementRef: (Element | Window) | Ref<Element | Window | undefined>
) => {
  let element
  if (elementRef && 'current' in elementRef) {
    element = elementRef.current
  } else {
    element = elementRef
  }

  if (isWindow(element)) {
    const width = element.innerWidth
    const height = element.innerHeight

    return {
      top: 0,
      left: 0,
      right: width,
      bottom: height,
      width,
      height
    }
  }

  if (element && 'getBoundingClientRect' in element) {
    return element.getBoundingClientRect()
  }

  return {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 0,
    height: 0
  }
}
