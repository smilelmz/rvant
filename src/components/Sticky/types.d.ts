/* eslint-disable @typescript-eslint/no-unused-vars */
export type StickyPosition = 'top' | 'bottom'
export type StickyProps = {
  zIndex?: number
  container?: HTMLElement | null
  offsetTop?: number | string
  offsetBottom?: number | string
  position?: StickyPosition
  scroll?: (obj?: { scrollTop: number; isFixed: boolean }) => void
  children: React.ReactNode | React.ReactNode[]
} & Pick<React.HTMLAttributes<HTMLDivElement>, 'children'>
