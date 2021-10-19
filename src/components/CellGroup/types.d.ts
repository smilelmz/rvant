export type CellGroupProps = {
  title?: string | React.ReactNode | React.ReactNode[]
  border?: boolean
} & Pick<
  React.HTMLAttributes<HTMLDivElement>,
  'style' | 'className' | 'children'
>
