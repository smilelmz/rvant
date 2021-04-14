import { MouseEvent } from 'react'
import { EventFunction } from '../type'

export interface NavBarProps {
  style?: Record<string, string | number>
  className?: string
  title?: string | React.ReactNode | React.ReactNode[]
  fixed?: boolean
  zIndex?: number | string
  left?: React.ReactNode | React.ReactNode[]
  right?: React.ReactNode | React.ReactNode[]
  leftText?: string
  rightText?: string
  leftArrow?: boolean
  placeholder?: boolean
  safeAreaInsetTop?: boolean
  border?: boolean
  clickLeft?: EventFunction<MouseEvent>
  clickRight?: EventFunction<MouseEvent>
}
