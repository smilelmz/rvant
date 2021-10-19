import { MouseEvent } from 'react'
import { EventFunction } from '../type'

export type TagType = 'default' | 'primary' | 'success' | 'warning' | 'danger'
export type TagProps = {
  size?: string
  mark?: boolean
  color?: string
  plain?: boolean
  round?: boolean
  textColor?: string
  closeable?: boolean
  type?: TagType
  show?: boolean
  children?: React.ReactNode | React.ReactNode[]
  close?: EventFunction<MouseEvent>
  click?: EventFunction<MouseEvent>
}
