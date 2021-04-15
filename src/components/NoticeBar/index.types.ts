import { MouseEvent } from 'react'
import { EventFunction } from '../type'

export type NoticeBarMode = 'closeable' | 'link'

export interface NoticeBarProps {
  style?: Record<string, string | number>
  className?: string
  text?: string
  mode?: NoticeBarMode
  color?: string
  leftIcon?: string | React.ReactNode
  rightIcon?: React.ReactNode
  wrapable?: boolean
  background?: string
  scrollable?: boolean | null
  delay?: number | string
  speed?: number | string
  children?: React.ReactNode | React.ReactNode[]
  click?: EventFunction<MouseEvent>
  close?: EventFunction<MouseEvent>
  replay?: VoidFunction
}
