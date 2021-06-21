import { MouseEvent } from 'react'
import { EventFunction } from '../type'

export interface SwipeItemProps {
  style?: Record<string, string | number>
  className?: string
  index?: number
  click?: EventFunction<MouseEvent>
  children?: React.ReactNode | React.ReactNode[]
}

export interface SwipeItemHandler {
  setOffset: (offset: number) => void
}
