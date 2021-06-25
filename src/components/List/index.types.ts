export type ListDirection = 'up' | 'down'

export interface ListProps {
  style?: Record<string, string | number>
  className?: string
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
  children?: React.ReactNode | React.ReactNode[]
  load?: VoidFunction
  updateLoading?: (v: boolean) => void
  updateError?: (v: boolean) => void
}

export interface ListHandler {
  check: VoidFunction
}
