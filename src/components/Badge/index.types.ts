export interface BadgeProps {
  dot?: boolean
  max?: number | string
  color?: string
  offset?: [number, number]
  tag?: 'div' | 'i' | 'span'
  content?: number | string | React.ReactNode | React.ReactNode[]
  children?: React.ReactNode | React.ReactNode[]
  style?: Record<string, any>
  className?: string
  showZero?: boolean
}
