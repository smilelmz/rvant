import { MouseEvent } from 'react'
import { EventFunction } from '../type'

export type LoadingTypes = 'spinner' | 'circular' | undefined

export type ButtonTypes =
  | 'default'
  | 'primary'
  | 'warning'
  | 'success'
  | 'danger'

export type ButtonProps = {
  type?: ButtonTypes
  text?: string
  color?: string
  fontColor?: string
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
} & Pick<
  React.HTMLAttributes<HTMLDivElement>,
  'style' | 'className' | 'children'
>
