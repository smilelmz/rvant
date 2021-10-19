import { ValueFunction } from '../type'

/* eslint-disable @typescript-eslint/no-unused-vars */
export type CheckerDirection = 'horizontal' | 'vertical'

export type CheckboxGroupProps = {
  value?: unknown[]
  max?: number | string
  disabled?: boolean
  direction?: CheckerDirection
  iconSize?: number | string
  checkedColor?: string
  change?: ValueFunction<any[]>
} & Pick<React.HTMLAttributes<HTMLDivElement>, 'children'>

export type CheckboxGroupToggleAllOptions =
  | boolean
  | {
      checked?: boolean
      skipDisabled?: boolean
    }

export interface CheckboxGroupHandle {
  toggleAll: (options: CheckboxGroupToggleAllOptions) => void
}
