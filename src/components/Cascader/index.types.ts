export type CascaderOption = {
  text?: string
  value?: string | number
  children?: CascaderOption[]
  // for custom filed names
  [key: string]: any
}

export type CascaderTab = {
  options: CascaderOption[]
  selectedOption: CascaderOption | null
}

export type CascaderFieldNames = {
  text?: string
  value?: string
  children?: string
}

export type CascaderEventParams = {
  value: any
  tabIndex: number
  selectedOptions: CascaderOption
}

export interface CascaderProps {
  style?: Record<string, string | number>
  className?: string
  title?: string | React.ReactNode | React.ReactNode[]
  closeable?: boolean
  swipeable?: boolean
  value?: number | string
  fieldNames?: CascaderFieldNames
  placeholder?: string
  activeColor?: string
  options?: CascaderOption[]
  closeIcon?: string
  close?: VoidFunction
  change?: (params: CascaderEventParams) => void
  finish?: (params: CascaderEventParams) => void
  clickTab?: (tabIndex: number, title: string) => void
}
