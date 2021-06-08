export interface CollapseItemProps {
  style?: Record<string, string | number>
  className?: string
  name?: number | string
  icon?: string | React.ReactNode | React.ReactNode[]
  size?: string
  value?: number | string | React.ReactNode | React.ReactNode[]
  label?: number | string | React.ReactNode | React.ReactNode[]
  border?: boolean
  isLink?: boolean
  disabled?: boolean
  readonly?: boolean
  title?: number | string | React.ReactNode | React.ReactNode[]
  titleClass?: string
  valueClass?: string
  labelClass?: string
  rightIcon?: string | React.ReactNode | React.ReactNode[]
  iconPrefix?: string
  url?: string
  index?: number
  children?: React.ReactNode | React.ReactNode[]
}

export interface CollapseItemHandler {
  toggle: (newValue?: boolean) => void
}
