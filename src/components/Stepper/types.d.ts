import { FocusEvent } from 'react'
import { EventFunction } from '../type'
import { Interceptor } from '../utils'

export type StepperProps = {
  theme?: string
  integer?: boolean
  disabled?: boolean
  allowEmpty?: boolean
  value?: number | string
  inputWidth?: number | string
  buttonSize?: number | string
  placeholder?: string
  disablePlus?: boolean
  disableMinus?: boolean
  disableInput?: boolean
  beforeChange?: Interceptor
  decimalLength?: number | string
  name?: number | string
  min?: number | string
  max?: number | string
  step?: number | string
  defaultValue?: number | string
  showPlus?: boolean
  showMinus?: boolean
  showInput?: boolean
  longPress?: boolean
  plus?: VoidFunction
  blur?: EventFunction<FocusEvent>
  minus?: VoidFunction
  focus?: EventFunction<FocusEvent>
  change?: (value?: number | string, name?: number | string) => void
  overlimit?: EventFunction<string>
} & Pick<React.HTMLAttributes<HTMLDivElement>, 'style' | 'className'>
