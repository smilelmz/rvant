import { MouseEvent } from 'react'
import { EventFunction } from '../type'

export interface ButtonProps {
  style?: Record<string, string | number>
  className?: string
  type?: ButtonTypes
  text?: string
  color?: string
  fontColor?: string
  children?: React.ReactNode | React.ReactNode[]
  loading?: boolean
  loadingIcon?: React.ReactNode
  loadingText?: string
  loadingType?: LoadingTypes
  loadingSize?: string | number
  size?: 'large' | 'small' | 'mini' | 'normal'
  icon?: string
  iconPrefix?: string
  hairline?: boolean
  plain?: boolean
  disabled?: boolean
  round?: boolean
  square?: boolean
  block?: boolean
  url?: string
  replace?: boolean
  tag?: 'button' | 'a'
  nativeType?: 'button' | 'submit' | 'reset'
  iconPosition?: 'left' | 'right'
  click?: EventFunction<MouseEvent>
}

export interface LoadingIconProps {
  className: string
  loadingType: LoadingTypes
  loadingText?: string
  loadingSize?: string
}

export type LoadingTypes = 'spinner' | 'circular' | undefined

export type ButtonTypes = 'default' | 'primary' | 'warning' | 'info' | 'danger'
