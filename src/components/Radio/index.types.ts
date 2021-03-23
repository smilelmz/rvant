export interface RadioProps {
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
  children?: React.ReactNode | React.ReactNode[]
  change?: Function
  click?: Function
}
