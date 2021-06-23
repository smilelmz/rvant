import { CSSProperties } from 'react'

export interface TabProps {
  style?: Record<string, string | number>
  className?: string
  dot?: boolean
  name?: number | string
  badge?: number | string
  title?: string
  disabled?: boolean
  titleClass?: string
  titleStyle?: CSSProperties
  index?: number
  customTitle?: React.ReactNode | React.ReactNode[]
  children?: React.ReactNode | React.ReactNode[]
}

export interface TabHandler {
  name: number | string | undefined
  ref: React.Ref<HTMLDivElement>
}
