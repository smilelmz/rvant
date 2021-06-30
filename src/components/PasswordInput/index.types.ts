import { TouchEvent } from 'react'

export interface PasswordInputProps {
  style?: Record<string, string | number>
  className?: string
  info?: string
  mask?: boolean
  gutter?: number | string
  focused?: boolean
  errorInfo?: string
  value?: string
  length?: number | string
  focus?: (e?: TouchEvent) => void
}
