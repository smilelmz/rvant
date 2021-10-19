import React from 'react'
import { ValueFunction } from '../type'

export type CircleProps = {
  text?: string
  size?: number | string
  color?: string | Record<string, string>
  layerColor?: string
  strokeLinecap?: CanvasLineCap
  currentRate?: number
  speed?: number | string
  fill?: string
  rate?: number | string
  strokeWidth?: number | string
  clockwise?: boolean
  change?: ValueFunction<number>
} & Pick<
  React.HTMLAttributes<HTMLDivElement>,
  'style' | 'className' | 'children'
>
