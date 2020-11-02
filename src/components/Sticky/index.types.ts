export interface StickyProps {
  zIndex?: number
  container?: HTMLElement | null
  offsetTop?: number | string
  scroll?: (scrollTop: number, isFixed: boolean) => void
  children: React.ReactNode | React.ReactNode[]
}
