export type TreeSelectChild = {
  id: number | string
  text: string
  disabled?: boolean
}

export type TreeSelectItem = {
  dot?: boolean
  text: string
  badge?: number | string
  children?: TreeSelectChild[]
  disabled?: boolean
  className?: unknown
}

export interface TreeSelectProps {
  style?: Record<string, string | number>
  className?: string
  max?: number | string
  items?: TreeSelectItem[]
  height?: number | string
  activeId?: number | string | (number | string)[]
  selectedIcon?: string
  mainActiveIndex?: number | string
  content?: React.ReactNode | React.ReactNode[]
  clickNav?: (index: number) => void
  clickItem?: (item: TreeSelectChild) => void
  updateActiveId?: (activeId: number | string | (number | string)[]) => void
  updateMainActiveIndex?: (index: number) => void
}
