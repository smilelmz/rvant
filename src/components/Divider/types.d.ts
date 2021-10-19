export type DividerContentPosition = 'left' | 'center' | 'right'

export type DividerProps = {
  dashed?: boolean
  hairline?: boolean
  contentPosition?: DividerContentPosition
} & Pick<
  React.HTMLAttributes<HTMLDivElement>,
  'style' | 'className' | 'children'
>
