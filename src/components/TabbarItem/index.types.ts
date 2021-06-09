import { MouseEvent } from 'react'
import { EventFunction } from '../type'

export interface TabbarItemProps {
  style?: Record<string, string | number>
  className?: string
  dot?: boolean
  icon?: string
  name?: number | string
  badge?: number | string
  iconPrefix?: string
  index?: number
  children?: React.ReactNode | React.ReactNode[]
  customIcon?: (active: boolean) => React.ReactNode
  click?: EventFunction<MouseEvent>
}
