type StatusType = {
  distance: number
}

export interface PullRefreshProps {
  style?: Record<string, string | number>
  className?: string
  disabled?: boolean
  successText?: string
  pullingText?: string
  loosingText?: string
  loadingText?: string
  pullDistance?: number | string
  value?: boolean
  successDuration?: number | string
  animationDuration?: number | string
  headHeight?: number | string
  children?: React.ReactNode | React.ReactNode[]
  normal?: (v?: StatusType) => React.ReactNode | React.ReactNode[]
  pulling?: (v?: StatusType) => React.ReactNode | React.ReactNode[]
  loosing?: (v?: StatusType) => React.ReactNode | React.ReactNode[]
  loading?: (v?: StatusType) => React.ReactNode | React.ReactNode[]
  success?: (v?: StatusType) => React.ReactNode | React.ReactNode[]
  refresh?: VoidFunction
  change?: (v: boolean) => void
}

export type PullRefreshStatus =
  | 'normal'
  | 'loading'
  | 'loosing'
  | 'pulling'
  | 'success'
