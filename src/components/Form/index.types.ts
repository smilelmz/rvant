import { FieldTextAlign, FieldValidateTrigger } from '../Field/index.types'

export type FormShareProps = {
  colon?: boolean
  disabled?: boolean
  readonly?: boolean
  showError?: boolean
  labelWidth?: number | string
  labelAlign?: FieldTextAlign
  inputAlign?: FieldTextAlign
  scrollToError?: boolean
  validateFirst?: boolean
  submitOnEnter?: boolean
  showErrorMessage?: boolean
  errorMessageAlign?: FieldTextAlign
  validateTrigger?: FieldValidateTrigger
}

export type FormProps = {
  style?: Record<string, string | number>
  className?: string
} & FormShareProps
