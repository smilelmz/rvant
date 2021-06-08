export interface CollapseProps {
  style?: Record<string, string | number>
  className?: string
  border?: boolean
  accordion?: boolean
  value?: string | number | (string | number)[]
  children?: React.ReactNode | React.ReactNode[]
  change?: (v: string | number | (string | number)[]) => void
}

export type ICollapseProvide = {
  toggle: (name: number | string, expanded: boolean) => void
  isExpanded: (name: number | string) => boolean
}
