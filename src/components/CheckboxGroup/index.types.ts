/* eslint-disable @typescript-eslint/no-unused-vars */
export type CheckerDirection = 'horizontal' | 'vertical'

export interface CheckboxGroupProps {
  value?: unknown[]
  max?: number | string
  disabled?: boolean
  direction?: CheckerDirection
  iconSize?: number | string
  checkedColor?: string
  change?: Function
  children?: React.ReactNode | React.ReactNode[]
}

export type CheckboxGroupToggleAllOptions =
  | boolean
  | {
      checked?: boolean
      skipDisabled?: boolean
    }

export interface CheckboxGroupHandle {
  toggleAll: (options: CheckboxGroupToggleAllOptions) => void
}
