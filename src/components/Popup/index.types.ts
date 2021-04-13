import { MouseEvent } from 'react'
import { EventFunction } from '../type'

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
  zIndex?: number | string
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
  closeOnPopstate?: boolean
  transition?: string
  transitionAppear?: boolean
  safeAreaInsetBottom?: boolean
  click?: EventFunction<MouseEvent>
  close?: VoidFunction
  opened?: VoidFunction
  closed?: VoidFunction
}

export interface PopupSharedProps {
  show?: boolean
  zIndex?: number | string
  duration?: number | string
  overlay?: boolean
  overlayClass?: string
  overlayStyle?: Record<string, any>
  transitionAppear?: boolean
  lockScroll?: boolean
  closeOnClickOverlay?: boolean
  opened?: VoidFunction
  closed?: VoidFunction
}
