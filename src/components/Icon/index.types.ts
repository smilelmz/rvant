import { MouseEvent } from 'react'
import { EventFunction } from '../type'

export interface IconProps {
  dot?: boolean
  name?: string
  size?: string | number
  badge?: string | number
  color?: string
  tag?: 'i' | 'span'
  classPrefix?: string
  className?: string
  style?: Record<string, any>
  click?: EventFunction<MouseEvent>
}
