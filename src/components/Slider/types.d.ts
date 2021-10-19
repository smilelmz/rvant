import React from 'react'
import { EventFunction } from '../type'

export type SliderValue = number | number[]

export type SliderProps = {
  range?: boolean
  disabled?: boolean
  readonly?: boolean
  vertical?: boolean
  barHeight?: number | string
  button?: React.ReactNode
  buttonSize?: number | string
  activeColor?: string
  inactiveColor?: string
  min?: number | string
  max?: number | string
  step?: number | string
  value?: SliderValue
  change?: EventFunction<SliderValue>
  dragEnd?: VoidFunction
  dragMove?: EventFunction<SliderValue>
  dragStart?: VoidFunction
} & Pick<React.HTMLAttributes<HTMLDivElement>, 'style' | 'className'>
