export interface IconProps {
  dot?: boolean
  tag?: 'i' | 'span'
  name?: string
  size?: string | number
  info?: string | number
  badge?: string | number
  color?: string
  classPrefix?: string
  click?: Function
  className?: string
  style?: Record<string, any>
}
