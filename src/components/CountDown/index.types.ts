import { CurrentTime } from '../composables/use-count-down'
import { ValueFunction } from '../type'

export interface CountDownProps {
  millisecond?: boolean
  time?: number | string
  format?: string
  autoStart?: boolean
  customRender?: (
    currentTime: CurrentTime
  ) => React.ReactNode | React.ReactNode[]
  change?: ValueFunction<CurrentTime>
  finish?: VoidFunction
}

export interface CountDownHandler {
  start: VoidFunction
  pause: VoidFunction
  reset: VoidFunction
}
