export type GridDirection = 'horizontal' | 'vertical'

export interface GridProps {
  style?: Record<string, string | number>
  className?: string
  square?: boolean
  gutter?: number | string
  iconSize?: number | string
  direction?: GridDirection
  clickable?: boolean
  columnNum?: number | string
  center?: boolean
  border?: boolean
  children?: React.ReactNode | React.ReactNode[]
}
