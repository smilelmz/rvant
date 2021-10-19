type StatusType = {
  distance: number
}

export type PullRefreshProps = {
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
  normal?: (v: StatusType) => React.ReactNode | React.ReactNode[]
  pulling?: (v: StatusType) => React.ReactNode | React.ReactNode[]
  loosing?: (v: StatusType) => React.ReactNode | React.ReactNode[]
  loading?: (v: StatusType) => React.ReactNode | React.ReactNode[]
  success?: (v: StatusType) => React.ReactNode | React.ReactNode[]
  refresh?: VoidFunction
  change?: (v: boolean) => void
} & Pick<
  React.HTMLAttributes<HTMLDivElement>,
  'style' | 'className' | 'children'
>

export type PullRefreshStatus =
  | 'normal'
  | 'loading'
  | 'loosing'
  | 'pulling'
  | 'success'
