export interface CheckboxProps {
  checked?: boolean
  name?: string
  shape?: 'round' | 'square'
  icon?: React.ReactNode
  iconSize?: number | string
  checkedColor?: string
  labelText?: string
  disabled?: boolean
  labelDisabled?: boolean
  labelPosition?: 'left' | 'right'
  change?: Function
  click?: Function
}
