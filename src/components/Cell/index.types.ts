import { EventFunction } from '../type'

export interface CellProps {
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
  clickable?: boolean
  isLink?: boolean
  required?: boolean
  center?: boolean
  arrowDirection?: 'up' | 'down' | 'left' | 'right'
  titleStyle?: Record<string, number | string | any>
  titleClass?: string
  valueClass?: string
  labelClass?: string
  click?: EventFunction<Event>
}
