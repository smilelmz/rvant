import { ValueFunction } from '../type'

export type RadioGroupProps = {
  value?: any
  disabled?: boolean
  direction?: 'vertical' | 'horizontal'
  checkedColor?: string
  iconSize?: number | string
  change?: ValueFunction<unknown>
} & Pick<
  React.HTMLAttributes<HTMLDivElement>,
  'style' | 'className' | 'children'
>
