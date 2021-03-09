/* eslint-disable @typescript-eslint/no-unused-vars */
export type PopupPosition = 'top' | 'left' | 'bottom' | 'right' | 'center' | ''
export type PopupCloseIconPosition =
  | 'top-left'
  | 'top-right'
  | 'botttom-left'
  | 'bottom-right'
export interface PopupProps {
  show?: boolean
  className?: string
  style?: Record<string, any>
  overlay?: boolean
  overlayClass?: string
  overlayStyle?: Record<string, any>
  position?: PopupPosition
  duration?: number | string
  round?: boolean
  lockScroll?: boolean
  closeOnClickOverlay?: boolean
  closeable?: boolean
  closeIcon?: string
  closeIconPosition?: PopupCloseIconPosition
  transition?: string
  transitionAppear?: boolean
  safeAreaInsetBottom?: boolean
  click?: (e?: any) => void
  close?: () => void
  opened?: () => void
  closed?: () => void
}
