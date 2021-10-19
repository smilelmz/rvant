import { MouseEvent, TouchEvent } from 'react'
import { EventFunction } from '../type'

export type IconProps = {
  dot?: boolean
  name?: string
  size?: string | number
  badge?: string | number
  color?: string
  tag?: 'i' | 'span'
  classPrefix?: string
  click?: EventFunction<MouseEvent>
  touchstart?: EventFunction<TouchEvent>
} & Pick<React.HTMLAttributes<HTMLDivElement>, 'style' | 'className'>
