import { MouseEvent } from 'react'
import { EventFunction, ValueFunction } from '../type'

export type RadioProps = {
  value?: any
  name?: string
  shape?: 'round' | 'square'
  direction?: 'vertical' | 'horizontal'
  icon?: React.ReactNode
  iconSize?: number | string
  checkedColor?: string
  labelText?: string
  disabled?: boolean
  labelDisabled?: boolean
  labelPosition?: 'left' | 'right'
  change?: ValueFunction<unknown>
  click?: EventFunction<MouseEvent>
} & Pick<React.HTMLAttributes<HTMLDivElement>, 'children'>
