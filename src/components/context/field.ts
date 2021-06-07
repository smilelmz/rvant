import { createContext, useContext } from 'react'
import { FieldContextProps } from '../Field/index.types'

export const FieldContext = createContext<Partial<FieldContextProps>>(null)

export function LinkField(value: unknown) {
  const field = useContext(FieldContext)

  if (field && !field.childFieldValue.current) {
    field.childFieldValue.current = value

    return true
    // useWatch(value, () => {
    //   field.resetValidation()
    //   field.validateWithTrigger('onChange')
    // })
  }
  return false
}
