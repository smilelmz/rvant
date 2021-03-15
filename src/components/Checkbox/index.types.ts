import { EventFunction } from '../type'

export type CheckerShape = 'square' | 'round'
export type CheckerDirection = 'horizontal' | 'vertical'
export type CheckerLabelPosition = 'left' | 'right'

export type CheckerParent = {
  max?: number | string
  disabled?: boolean
  iconSize?: number | string
  direction?: CheckerDirection
  checkedColor?: string
  modelValue?: unknown[]
  updateGroupValue?: Function
}

export interface CheckboxProps {
  checked?: boolean
  name?: string
  shape?: CheckerShape
  icon?: React.ReactNode
  iconSize?: number | string
  checkedColor?: string
  labelText?: string
  disabled?: boolean
  labelDisabled?: boolean
  labelPosition?: CheckerLabelPosition
  change?: Function
  click?: Function
  bindGroup?: boolean
  parent?: CheckerParent
  children?: React.ReactNode | React.ReactNode[]
}

export interface CheckboxHandler {
  bindGroup: boolean
  name: string | undefined
  checked: boolean
  disabled: boolean
  toggle: EventFunction<boolean>
}
