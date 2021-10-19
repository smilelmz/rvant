import { MouseEvent } from 'react'
import { EventFunction } from '../type'

export type TabbarItemProps = {
  dot?: boolean
  icon?: string
  name?: number | string
  badge?: number | string
  iconPrefix?: string
  index?: number
  customIcon?: (active: boolean) => React.ReactNode
  click?: EventFunction<MouseEvent>
} & Pick<
  React.HTMLAttributes<HTMLDivElement>,
  'style' | 'className' | 'children'
>
