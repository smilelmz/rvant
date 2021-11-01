export type NotifyType = 'primary' | 'success' | 'danger' | 'warning'
export type NotifyMessage = string | number

export type NotifyProps = {
  show: boolean
  type?: NotifyType
  color?: string
  message?: number | string | React.ReactNode
  className?: number | string
  background?: string
  lockScroll?: boolean
  updateShow?: (show: boolean) => void
} & Pick<
  React.HTMLAttributes<HTMLDivElement>,
  'style' | 'className' | 'children'
>

export type NotifyOptions = {
  type?: NotifyType
  color?: string
  message?: NotifyMessage
  duration?: number
  className?: unknown
  background?: string
  lockScroll?: boolean
  onClick?: (event: MouseEvent) => void
  onClose?: () => void
  onOpened?: () => void
}
