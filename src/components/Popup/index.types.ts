import { MouseEvent, RefObject } from 'react'
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
  iconPrefix?: string
  transition?: string
  transitionAppear?: boolean
  safeAreaInsetBottom?: boolean
  teleport?: HTMLElement | boolean
  teleportClassName?: string
  teleportStyle?: Record<string, any>
  children?: React.ReactNode | React.ReactNode[]
  click?: EventFunction<MouseEvent>
  close?: VoidFunction
  opened?: VoidFunction
  closed?: VoidFunction
  updateShow?: (show: boolean) => void
  clickOverlay?: EventFunction<MouseEvent>
  clickCloseIcon?: EventFunction<MouseEvent>
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
  updateShow?: (show: boolean) => void
}

export interface PopupHandler {
  popupRef: RefObject<HTMLDivElement>
}
