import { TouchEvent } from 'react'

export type PasswordInputProps = {
  info?: string
  mask?: boolean
  gutter?: number | string
  focused?: boolean
  errorInfo?: string
  value?: string
  length?: number | string
  focus?: (e?: TouchEvent) => void
} & Pick<React.HTMLAttributes<HTMLDivElement>, 'style' | 'className'>
