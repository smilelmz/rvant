import { ValueFunction } from '../type'

export type PaginationMode = 'simple' | 'multi'

export type PageItem = {
  text: string | number
  number: number
  active?: boolean
}

export type PaginationProps = {
  prevText?: string | React.ReactNode
  nextText?: string | React.ReactNode
  forceEllipses?: boolean
  mode?: PaginationMode
  value?: number
  pageDesc?: React.ReactNode
  pageCount?: number | string
  totalItems?: number | string
  itemsPerPage?: number | string
  showPageSize?: number | string
  renderPage?: (page: PageItem) => React.ReactNode | React.ReactNode
  change?: ValueFunction<number>
} & Pick<React.HTMLAttributes<HTMLDivElement>, 'style' | 'className'>
