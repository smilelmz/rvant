export type ProgressProps = {
  color?: string
  inactive?: boolean
  pivotText?: string
  textColor?: string
  pivotColor?: string
  trackColor?: string
  strokeWidth?: number | string
  percentage: number | string
  showPivot?: boolean
} & Pick<React.HTMLAttributes<HTMLDivElement>, 'style' | 'className'>

export interface ProgressHandler {
  resize: VoidFunction
}
