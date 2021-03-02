export interface PopupProps {
  show?: boolean
  className?: string
  style?: Record<string, any>
  overlay?: boolean
  overlayClass?: string
  overlayStyle?: Record<string, any>
  position?: 'top' | 'bottom' | 'left' | 'right' | 'center'
  duration?: number | string
  round?: boolean
  lockScroll?: boolean
  closeOnClickOverlay?: boolean
  closeable?: boolean
  closeIcon?: string
  closeIconPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  transition?: string
  transitionAppear?: boolean
  safeAreaInsetBottom?: boolean
  click?: (e?: any) => void
  close?: () => void
  opened?: () => void
  closed?: () => void
}
