import { MouseEvent } from 'react'
import { EventFunction } from '../type'

export type RowSpaces = { left?: number; right: number }[]
export const ROW_KEY = Symbol('van-row')
export type RowAlign = 'top' | 'center' | 'bottom'
export type RowJustify =
  | 'start'
  | 'end'
  | 'center'
  | 'space-around'
  | 'space-between'
export interface RowProps {
  type?: string
  align?: RowAlign
  justify?: RowJustify
  wrap?: boolean
  gutter?: number | string
  click?: EventFunction<MouseEvent>
  children?: React.ReactNode[] | React.ReactNode
}
