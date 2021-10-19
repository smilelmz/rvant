export type BadgeProps = {
  dot?: boolean
  max?: number | string
  color?: string
  offset?: [number, number]
  tag?: 'div' | 'i' | 'span'
  content?: number | string | React.ReactNode | React.ReactNode[]
  showZero?: boolean
} & Pick<
  React.HTMLAttributes<HTMLDivElement>,
  'style' | 'className' | 'children'
>
