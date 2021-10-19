import { Interceptor } from '../utils'

export type TabbarProps = {
  fixed?: boolean
  border?: boolean
  zIndex?: number | string
  placeholder?: boolean
  activeColor?: string
  beforeChange?: Interceptor
  inactiveColor?: string
  value?: number | string
  safeAreaInsetBottom?: boolean | null
  change?: (active: number | string) => void
} & Pick<
  React.HTMLAttributes<HTMLDivElement>,
  'style' | 'className' | 'children'
>

export type TabbarProvide = {
  props: TabbarProps
  setActive: (active: number | string) => void
}
