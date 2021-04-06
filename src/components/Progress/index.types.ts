export interface ProgressProps {
  style?: Record<string, string | number>
  className?: string
  color?: string
  inactive?: boolean
  pivotText?: string
  textColor?: string
  pivotColor?: string
  trackColor?: string
  strokeWidth?: number | string
  percentage: number | string
  showPivot?: boolean
}

export interface ProgressHandler {
  resize: VoidFunction
}
