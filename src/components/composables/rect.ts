import { BasicTarget, getTargetElement } from '../utils'

function isWindow(val: unknown): val is Window {
  return val === window
}

export const getRect = (target: BasicTarget) => {
  const el = getTargetElement(target)

  if (isWindow(el)) {
    const width = el.innerWidth
    const height = el.innerHeight

    return {
      top: 0,
      left: 0,
      right: width,
      bottom: height,
      width,
      height
    }
  }

  if (el && 'getBoundingClientRect' in el) {
    return el.getBoundingClientRect()
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
