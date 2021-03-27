import { ValueFunction } from '../type'

export interface RateProps {
  value?: number
  count?: number
  size?: string | number
  gutter?: string | number
  color?: string
  voidColor?: string
  disabledColor?: string
  icon?: string
  voidIcon?: string
  iconPrefix?: string
  allowHalf?: boolean
  readonly?: boolean
  disabled?: boolean
  touchable?: boolean
  change?: ValueFunction<number>
}
