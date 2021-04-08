export function stopPropagation(event: any) {
  event.stopPropagation()
}

export function preventDefault(event: any, isStopPropagation?: boolean) {
  /* istanbul ignore else */
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault()
  }

  if (isStopPropagation) {
    stopPropagation(event)
  }
}

export function trigger(target: Element, type: string) {
  const inputEvent = document.createEvent('HTMLEvents')
  inputEvent.initEvent(type, true, true)
  target.dispatchEvent(inputEvent)
}
