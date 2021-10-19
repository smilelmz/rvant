export type EmptyProps = {
  imageSize?: number | string
  description?: string | React.ReactNode
  image?: string | React.ReactNode
} & Pick<
  React.HTMLAttributes<HTMLDivElement>,
  'style' | 'className' | 'children'
>
