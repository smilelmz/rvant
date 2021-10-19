import { PopupSharedProps } from '../Popup/types'

export type ShareSheetOption = {
  name: string
  icon: string
  className?: string
  description?: string
}

export type ShareSheetOptions = ShareSheetOption[] | ShareSheetOption[][]

export type ShareSheetProps = {
  title?: string | React.ReactNode | React.ReactNode[]
  cancelText?: string | React.ReactNode | React.ReactNode[]
  description?: string | React.ReactNode | React.ReactNode[]
  options?: ShareSheetOptions
  closeOnPopstate?: boolean
  safeAreaInsetBottom?: boolean
  select?: (action: ShareSheetOption, index: number) => void
  cancel?: VoidFunction
} & PopupSharedProps &
  Pick<React.HTMLAttributes<HTMLDivElement>, 'style' | 'className'>
