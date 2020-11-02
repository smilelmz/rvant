export interface OverlayProps {
  show?: boolean
  zIndex?: number
  duration?: number
  className?: string
  customStyle?: Record<string, any>
  lockScroll?: boolean
  click?: (e?: any) => void
}
