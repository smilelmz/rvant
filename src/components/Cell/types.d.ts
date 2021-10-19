import { TouchEvent } from 'react'
import { EventFunction } from '../type'

export type CellProps = {
  title?: number | string | React.ReactNode | React.ReactNode[]
  value?: number | string | React.ReactNode | React.ReactNode[]
  label?: number | string | React.ReactNode | React.ReactNode[]
  size?: string
  icon?: string | React.ReactNode | React.ReactNode[]
  rightIcon?: string | React.ReactNode | React.ReactNode[]
  iconPrefix?: string
  url?: string
  border?: boolean
  replace?: boolean
  clickable?: boolean | null
  isLink?: boolean
  required?: boolean
  center?: boolean
  arrowDirection?: 'up' | 'down' | 'left' | 'right'
  titleStyle?: Record<string, number | string | any>
  titleClass?: string
  valueClass?: string
  labelClass?: string
  extra?: React.ReactNode
  click?: EventFunction<TouchEvent>
} & Pick<
  React.HTMLAttributes<HTMLDivElement>,
  'style' | 'className' | 'children'
>
