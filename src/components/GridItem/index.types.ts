import { MouseEvent } from 'react'
import { EventFunction } from '../type'

export interface GridItemProps {
  style?: Record<string, string | number>
  className?: string
  dot?: boolean
  text?: string | React.ReactNode
  icon?: string | React.ReactNode
  badge?: number | string
  iconPrefix?: string
  index?: number
  children?: React.ReactNode | React.ReactNode[]
  click?: EventFunction<MouseEvent>
}
