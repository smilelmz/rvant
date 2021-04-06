export type DividerContentPosition = 'left' | 'center' | 'right'

export interface DividerProps {
  style?: Record<string, string | number>
  className?: string
  dashed?: boolean
  hairline?: boolean
  contentPosition?: DividerContentPosition
  children?: React.ReactNode
}
