import { PopupSharedProps } from '../Popup/index.types'

export type ActionSheetAction = {
  name?: string
  color?: string
  subname?: string
  loading?: boolean
  disabled?: boolean
  callback?: (action: ActionSheetAction) => void
  className?: unknown
}

export type ActionSheetProps = {
  style?: Record<string, string | number>
  className?: string
  title?: string
  actions?: ActionSheetAction[]
  cancelText?: string | React.ReactNode | React.ReactNode[]
  description?: string | React.ReactNode | React.ReactNode[]
  closeOnPopstate?: boolean
  closeOnClickAction?: boolean
  round?: boolean
  closeable?: boolean
  closeIcon?: string
  safeAreaInsetBottom?: boolean
  children?: React.ReactNode | React.ReactNode[]
  select?: (action: ActionSheetAction, index: number) => void
  cancel?: VoidFunction
} & PopupSharedProps
