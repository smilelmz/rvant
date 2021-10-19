export type ListDirection = 'up' | 'down'

export type ListProps = {
  error?: boolean
  loading?: boolean
  finished?: boolean
  errorText?: string
  loadingText?: string
  finishedText?: string
  immediateCheck?: boolean
  offset?: number | string
  direction?: ListDirection
  customLoading?: React.ReactNode | React.ReactNode[]
  customFinished?: React.ReactNode | React.ReactNode[]
  customError?: React.ReactNode | React.ReactNode[]
  load?: VoidFunction
  updateLoading?: (v: boolean) => void
  updateError?: (v: boolean) => void
} & Pick<
  React.HTMLAttributes<HTMLDivElement>,
  'style' | 'className' | 'children'
>

export interface ListHandler {
  check: VoidFunction
}
