import { MouseEvent } from 'react'
import { EventFunction } from '../type'

export type GridItemProps = {
  dot?: boolean
  text?: string | React.ReactNode
  icon?: string | React.ReactNode
  badge?: number | string
  iconPrefix?: string
  index?: number

  click?: EventFunction<MouseEvent>
} & Pick<
  React.HTMLAttributes<HTMLDivElement>,
  'style' | 'className' | 'children'
>
