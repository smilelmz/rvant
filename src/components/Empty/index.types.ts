export interface EmptyProps {
  style?: Record<string, string | number>
  className?: string
  imageSize?: number | string
  description?: string | React.ReactNode
  image?: string | React.ReactNode
  children?: React.ReactNode | React.ReactNode[]
}
