import { EventFunction } from '../type'

export type TagType = 'default' | 'primary' | 'success' | 'warning' | 'danger'
export interface TagProps {
  size?: string
  mark?: string
  color?: string
  plain?: boolean
  round?: boolean
  textColor?: string
  closeable?: boolean
  type?: TagType
  show?: boolean
  children?: React.ReactNode | React.ReactNode[]
  close?: EventFunction<MouseEvent>
}
