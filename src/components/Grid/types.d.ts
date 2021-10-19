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

export type GridProps = GridParent &
  Pick<React.HTMLAttributes<HTMLDivElement>, 'style' | 'className' | 'children'>
