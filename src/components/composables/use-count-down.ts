import { useEffect, useMemo, useRef, useState } from 'react'
import { raf, cancelRaf, inBrowser } from '../utils'

export type CurrentTime = {
  days: number
  hours: number
  total: number
  minutes: number
  seconds: number
  milliseconds: number
}

export type UseCountDownOptions = {
  time: number
  millisecond?: boolean
  onChange?: (current: CurrentTime) => void
  onFinish?: () => void
}

const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

function parseTime(time: number): CurrentTime {
  const days = Math.floor(time / DAY)
  const hours = Math.floor((time % DAY) / HOUR)
  const minutes = Math.floor((time % HOUR) / MINUTE)
  const seconds = Math.floor((time % MINUTE) / SECOND)
  const milliseconds = Math.floor(time % SECOND)

  return {
    total: time,
    days,
    hours,
    minutes,
    seconds,
    milliseconds
  }
}

function isSameSecond(time1: number, time2: number): boolean {
  return Math.floor(time1 / 1000) === Math.floor(time2 / 1000)
}

export function useCountDown(options: UseCountDownOptions) {
  const counting = useRef(false)
  const remain = useRef(options.time)
  const [timeLeft, setTimeLeft] = useState<CurrentTime>(
    parseTime(remain.current)
  )

  const actions = useMemo(() => {
    let rafId: number
    let endTime: number
    const pause = () => {
      counting.current = false
      cancelRaf(rafId)
    }

    const getCurrentRemain = () => Math.max(endTime - Date.now(), 0)

    const setRemain = (value: number) => {
      remain.current = value
      options.onChange?.(timeLeft)
      setTimeLeft(parseTime(remain.current))
      if (value === 0) {
        pause()
        options.onFinish?.()
      }
    }

    const microTick = () => {
      rafId = raf(() => {
        // in case of call reset immediately after finish
        if (counting.current) {
          setRemain(getCurrentRemain())

          if (remain.current > 0) {
            microTick()
          }
        }
      })
    }

    const macroTick = () => {
      rafId = raf(() => {
        // in case of call reset immediately after finish
        if (counting.current) {
          const remainRemain = getCurrentRemain()
          if (
            !isSameSecond(remainRemain, remain.current) ||
            remainRemain === 0
          ) {
            setRemain(remainRemain)
          }

          if (remain.current > 0) {
            macroTick()
          }
        }
      })
    }

    const tick = () => {
      // should not start counting in server
      // see: https://github.com/youzan/vant/issues/7807
      if (!inBrowser) {
        return
      }

      if (options.millisecond) {
        microTick()
      } else {
        macroTick()
      }
    }

    const start = () => {
      if (!counting.current) {
        endTime = Date.now() + remain.current
        counting.current = true
        tick()
      }
    }

    const reset = (totalTime: number = options.time) => {
      pause()
      remain.current = totalTime
      setTimeLeft(parseTime(remain.current))
    }

    return { start, reset, pause }
  }, [])

  useEffect(() => {
    return () => {
      actions.pause()
    }
  }, [])

  return [timeLeft, actions] as const
}
