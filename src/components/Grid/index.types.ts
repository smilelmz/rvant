export type GridDirection = 'horizontal' | 'vertical'

export interface GridParent {
  square?: boolean
  gutter?: number | string
  iconSize?: number | string
  direction?: GridDirection
  clickable?: boolean
  columnNum?: number | string
  center?: boolean
  border?: boolean
}

export type GridProps = {
  style?: Record<string, string | number>
  className?: string
  children?: React.ReactNode | React.ReactNode[]
} & GridParent
