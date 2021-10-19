export type CollapseProps = {
  border?: boolean
  accordion?: boolean
  value?: string | number | (string | number)[]
  change?: (v: string | number | (string | number)[]) => void
} & Pick<
  React.HTMLAttributes<HTMLDivElement>,
  'style' | 'className' | 'children'
>

export type ICollapseProvide = {
  toggle: (name: number | string, expanded: boolean) => void
  isExpanded: (name: number | string) => boolean
}
