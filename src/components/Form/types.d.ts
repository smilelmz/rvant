import { FieldTextAlign, FieldValidateTrigger } from '../Field/types'

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

export type FormProps = FormShareProps &
  Pick<React.HTMLAttributes<HTMLDivElement>, 'style' | 'className'>
