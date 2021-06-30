import { KeyboardEvent, MouseEvent, FocusEvent, TouchEvent } from 'react'
import { EventFunction, ValueFunction } from '../type'

export type FieldType =
  | 'tel'
  | 'text'
  | 'digit'
  | 'number'
  | 'search'
  | 'password'
  | 'textarea'
export type FieldModeType =
  | 'none'
  | 'text'
  | 'tel'
  | 'url'
  | 'email'
  | 'numeric'
  | 'decimal'
  | 'search'
export type FieldTextAlign = 'left' | 'center' | 'right'
export type FieldClearTrigger = 'always' | 'focus'
export type FieldFormatTrigger = 'onBlur' | 'onChange'
export type FieldValidateTrigger = 'onBlur' | 'onChange' | 'onSubmit'
export type FieldAutosizeConfig = {
  maxHeight?: number
  minHeight?: number
}
export type FieldValidateError = {
  name?: string
  message: string
}
export type FieldRule = {
  pattern?: RegExp
  trigger?: FieldValidateTrigger
  message?: string | ((value: any, rule: FieldRule) => string)
  required?: boolean
  validator?: (
    value: any,
    rule: FieldRule
  ) => boolean | string | Promise<boolean | string>
  formatter?: (value: any, rule: FieldRule) => string
}

declare global {
  interface EventTarget {
    composing?: boolean
  }
}

export type FieldCellProps = {
  icon?: string
  size?: string
  label?: number | string | React.ReactNode | React.ReactNode[]
  center?: boolean
  isLink?: boolean
  border?: boolean
  required?: boolean
  iconPrefix?: string
  valueClass?: string
  labelClass?: string
  titleStyle?: Record<string, number | string | any>
  titleClass?: string
  arrowDirection?: 'up' | 'down' | 'left' | 'right'
  clickable?: boolean
  click?: EventFunction<TouchEvent>
}

export type FieldSharedProps = {
  formatter?: (value: string) => string
  value?: number | string
  leftIcon?: string | React.ReactNode
  rightIcon?: string | React.ReactNode
  autofocus?: boolean
  clearable?: boolean
  maxlength?: number | string
  inputAlign?: FieldTextAlign
  placeholder?: string
  errorMessage?: string
  error?: boolean
  disabled?: boolean
  readonly?: boolean
  clearIcon?: string
  modelValue?: number | string
  clearTrigger?: FieldClearTrigger
  formatTrigger?: FieldFormatTrigger
}

export type FieldProps = FieldCellProps &
  FieldSharedProps & {
    style?: Record<string, string | number>
    className?: string
    rows?: number | string
    name?: string
    rules?: FieldRule[]
    autosize?: boolean | FieldAutosizeConfig
    labelWidth?: number | string
    labelClass?: string
    labelAlign?: FieldTextAlign
    autocomplete?: string
    showWordLimit?: boolean
    errorMessageAlign?: FieldTextAlign
    type?: FieldType
    colon?: boolean
    // slots
    input?: React.ReactNode
    button?: React.ReactNode
    extra?: React.ReactNode | React.ReactNode[]
    blur?: EventFunction<FocusEvent>
    focus?: EventFunction<FocusEvent>
    clear?: EventFunction<TouchEvent>
    keypress?: EventFunction<KeyboardEvent>
    clickInput?: EventFunction<MouseEvent>
    clickLeftIcon?: EventFunction<MouseEvent>
    clickRightIcon?: EventFunction<MouseEvent>
    change?: ValueFunction<string>
  }

export type FieldHandle = {
  blur: VoidFunction
  focus: VoidFunction
  validate: (rules?: FieldRule[]) => Promise<void | FieldValidateError>
  formValue: () => unknown
  resetValidation: VoidFunction
}

export type FieldContextProps = {
  childFieldValue?: React.MutableRefObject<unknown>
  resetValidation?: VoidFunction
  validateWithTrigger?: (trigger: FieldValidateTrigger) => void
}
