import { Interceptor } from '../utils'

export interface TabbarProps {
  style?: Record<string, string | number>
  className?: string
  fixed?: boolean
  border?: boolean
  zIndex?: number | string
  placeholder?: boolean
  activeColor?: string
  beforeChange?: Interceptor
  inactiveColor?: string
  value?: number | string
  safeAreaInsetBottom?: boolean | null
  children?: React.ReactNode | React.ReactNode[]
  change?: (active: number | string) => void
}

export type TabbarProvide = {
  props: TabbarProps
  setActive: (active: number | string) => void
}
