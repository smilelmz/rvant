const MIN_DISTANCE = 10

const getDirection = (x: number, y: number) => {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal'
  }

  if (y > x && y > MIN_DISTANCE) {
    return 'vertical'
  }

  return ''
}
export const getTouchStartPos = (event: any) => {
  return {
    startX: event.touches[0].clientX,
    startY: event.touches[0].clientY
  }
}

export const getTouchMovePos = (event: any, startPos: any) => {
  const touch = event.touches[0]
  const data = {
    direction: '',
    deltaX: 0,
    deltaY: 0,
    offsetX: 0,
    offsetY: 0
  }
  data.deltaX = touch.clientX - startPos.startX
  data.deltaY = touch.clientY - startPos.startY
  data.offsetX = Math.abs(data.deltaX)
  data.offsetY = Math.abs(data.deltaY)
  data.direction = data.direction || getDirection(data.offsetX, data.offsetY)
  return data
}
