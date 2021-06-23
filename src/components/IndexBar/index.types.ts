export interface IndexBarProps {
  style?: Record<string, string | number>
  className?: string
  sticky?: boolean
  zIndex?: number | string
  teleport?: HTMLElement | boolean
  teleportClassName?: string
  teleportStyle?: Record<string, any>
  highlightColor?: string
  stickyOffsetTop?: number
  indexList?: string[] | number[]
  children?: React.ReactElement | React.ReactElement[]
  select?: (index: number) => void
  change?: (value: string) => void
}

export interface IndexBarProvider {
  props: IndexBarProps
}

export interface IndexBarHandler {
  scrollTo: (index: string) => void
}
