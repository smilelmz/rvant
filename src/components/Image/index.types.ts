/* eslint-disable @typescript-eslint/no-unused-vars */
export interface ImageProps {
  src?: string
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  alt?: string
  width?: number | string
  height?: number | string
  radius?: number | string
  round?: boolean
  lazyLoad?: boolean
  iconPrefix?: string
  iconSize?: number | string
  showError?: boolean
  showLoading?: boolean
  errorIcon?: string | React.ReactNode
  loadingIcon?: string | React.ReactNode
  click?: (e?: any) => void
  load?: (e?: any) => void
  error?: (e?: any) => void
}
