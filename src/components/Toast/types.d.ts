import { LoadingType } from '../Loading/types'

export type ToastType = 'text' | 'loading' | 'success' | 'fail' | 'html'
export type ToastPosition = 'middle' | 'top' | 'bottom'

export type ToastProps = {
  type?: ToastType
  position?: ToastPosition
  message?: string
  icon?: string
  iconSize?: number | string
  iconPrefix?: string
  mask?: boolean
  loadingType?: LoadingType
  duration?: number
  className?: string
  onOpened?: VoidFunction
  onClose?: VoidFunction
}
