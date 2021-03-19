export interface SwitchProps {
  size?: number | string
  loading?: boolean
  disabled?: boolean
  value?: unknown
  activeColor?: string
  inactiveColor?: string
  activeValue?: unknown
  inactiveValue?: unknown
  change?: Function
}
