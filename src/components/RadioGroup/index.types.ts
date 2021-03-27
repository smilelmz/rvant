import { ValueFunction } from '../type'

export interface RadioGroupProps {
  value?: any
  className?: string
  disabled?: boolean
  direction?: 'vertical' | 'horizontal'
  checkedColor?: string
  iconSize?: number | string
  children?: React.ReactNode | React.ReactNode[]
  change?: ValueFunction<unknown>
}
