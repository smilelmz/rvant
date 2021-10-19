export type CollapseItemProps = {
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
} & Pick<
  React.HTMLAttributes<HTMLDivElement>,
  'style' | 'className' | 'children'
>

export interface CollapseItemHandler {
  toggle: (newValue?: boolean) => void
}
