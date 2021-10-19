export type LoadingType = 'circular' | 'spinner'
export type LoadingProps = {
  type?: LoadingType
  size?: string | number
  color?: string
  vertical?: boolean
  textSize?: string | number
  textColor?: string
} & Pick<
  React.HTMLAttributes<HTMLDivElement>,
  'style' | 'className' | 'children'
>
