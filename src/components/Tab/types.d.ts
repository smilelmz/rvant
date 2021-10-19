import { CSSProperties } from 'react'

export type TabProps = {
  dot?: boolean
  name?: number | string
  badge?: number | string
  title?: string
  disabled?: boolean
  titleClass?: string
  titleStyle?: CSSProperties
  index?: number
  customTitle?: React.ReactNode | React.ReactNode[]
} & Pick<
  React.HTMLAttributes<HTMLDivElement>,
  'style' | 'className' | 'children'
>

export interface TabHandler {
  name: number | string | undefined
  ref: React.Ref<HTMLDivElement>
}
