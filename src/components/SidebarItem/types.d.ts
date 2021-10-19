import { MouseEvent } from 'react'
import { EventFunction } from '../type'

export type SidebarItemProps = {
  dot?: boolean
  title?: string | React.ReactNode | React.ReactNode[]
  badge?: number | string
  disabled?: boolean
  index?: number
  click?: EventFunction<MouseEvent>
} & Pick<React.HTMLAttributes<HTMLDivElement>, 'style' | 'className'>
