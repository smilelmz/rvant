import React from 'react'
import { ValueFunction } from '../type'

export interface CircleProps {
  style?: Record<string, string | number>
  className?: string
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
  children?: React.ReactElement
}
