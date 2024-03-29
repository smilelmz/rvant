import { MouseEvent } from 'react'
import { EventFunction } from '../type'

export type NoticeBarMode = 'closeable' | 'link'

export type NoticeBarProps = {
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
  click?: EventFunction<MouseEvent>
  close?: EventFunction<MouseEvent>
  replay?: VoidFunction
} & Pick<
  React.HTMLAttributes<HTMLDivElement>,
  'style' | 'className' | 'children'
>
