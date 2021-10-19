import React, { useImperativeHandle, useMemo } from 'react'
import { CountDownProps, CountDownHandler } from './types'
import { createNamespace } from '../utils'
import { useCountDown, useWatch } from '../composables'
import { parseFormat } from './utils'

const [bem] = createNamespace('count-down')
const CountDown = (
  {
    millisecond,
    time = 0,
    format = 'HH:mm:ss',
    autoStart = true,
    customRender,
    change,
    finish
  }: CountDownProps,
  ref: React.Ref<CountDownHandler>
) => {
  const [timeLeft, actions] = useCountDown({
    time: +time,
    millisecond,
    onChange: (current) => change && change(current),
    onFinish: () => finish && finish()
  })
  const { start, pause, reset } = actions
  const timeText = useMemo(() => parseFormat(format, timeLeft), [timeLeft])
  const resetTime = () => {
    reset(+time)
    if (autoStart) {
      start()
    }
  }
  useWatch(time, resetTime, { immediate: true })
  useImperativeHandle(ref, () => ({
    start,
    pause,
    reset: resetTime
  }))
  return (
    <div className={bem()}>
      {customRender ? customRender(timeLeft) : timeText}
    </div>
  )
}
export default React.memo(React.forwardRef(CountDown))
