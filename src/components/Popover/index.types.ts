import { CSSProperties, TouchEvent } from 'react'
import { EventFunction } from '../type'

export type PopoverTheme = 'light' | 'dark'
export type PopoverTrigger = 'manual' | 'click'
export type PopoverPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'

export type PopoverAction = {
  text: string
  icon?: string
  color?: string
  disabled?: boolean
  className?: string
}

export interface PopoverProps {
  style?: Record<string, string | number>
  className?: string
  show: boolean
  overlay?: boolean
  duration?: number | string
  overlayClass?: string
  overlayStyle?: CSSProperties
  offset?: [number, number]
  theme?: PopoverTheme
  trigger?: PopoverTrigger
  actions?: PopoverAction[]
  placement?: PopoverPlacement
  closeOnClickAction?: boolean
  closeOnClickOverlay?: boolean
  closeOnClickOutside?: boolean
  reference?: React.ReactNode | React.ReactNode[]
  children?: React.ReactNode | React.ReactNode[]
  select?: (action: PopoverAction, index: number) => void
  updateShow: (v: boolean) => void
}
