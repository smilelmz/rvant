export type IndexBarProps = {
  sticky?: boolean
  zIndex?: number | string
  teleport?: HTMLElement | boolean
  teleportClassName?: string
  teleportStyle?: Record<string, any>
  highlightColor?: string
  stickyOffsetTop?: number
  indexList?: string[] | number[]
  select?: (index: number) => void
  change?: (value: string) => void
} & Pick<
  React.HTMLAttributes<HTMLDivElement>,
  'style' | 'className' | 'children'
>

export interface IndexBarProvider {
  props: IndexBarProps
}

export interface IndexBarHandler {
  scrollTo: (index: string) => void
}
