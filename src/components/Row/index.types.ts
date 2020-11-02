export interface RowProps {
  type?: string
  align?: string
  justify?: string
  gutter?: number | string
  click?: (e: any) => void
  children?: React.ReactNode[] | React.ReactNode
}
