import { MouseEvent } from 'react'
import { EventFunction } from '../type'

export interface SidebarItemProps {
  style?: Record<string, string | number>
  className?: string
  dot?: boolean
  title?: string | React.ReactNode | React.ReactNode[]
  badge?: number | string
  disabled?: boolean
  index?: number
  click?: EventFunction<MouseEvent>
}
