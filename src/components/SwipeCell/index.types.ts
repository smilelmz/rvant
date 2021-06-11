import { Interceptor } from '../utils'

export type SwipeCellSide = 'left' | 'right'
export type SwipeCellPosition = SwipeCellSide | 'cell' | 'outside'
export type SwipeType = {
  name: string | number
  position: SwipeCellPosition
}

export interface SwipeCellProps {
  style?: Record<string, string | number>
  className?: string
  disabled?: boolean
  leftWidth?: number | string
  rightWidth?: number | string
  beforeClose?: Interceptor
  stopPropagation?: boolean
  name?: number | string
  left?: React.ReactNode | React.ReactNode[]
  right?: React.ReactNode | React.ReactNode[]
  children?: React.ReactNode | React.ReactNode[]
  open?: (v: SwipeType) => void
  close?: (v: SwipeType) => void
  click?: (position: SwipeCellPosition) => void
}

export type SwiperCellHandle = {
  open: (side: SwipeCellSide) => void
  close: (position: SwipeCellPosition) => void
}
