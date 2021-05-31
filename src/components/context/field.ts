import { createContext, useContext } from 'react'
import { useWatch } from '../composables/use-watch'
import { FieldContextProps } from '../Field/index.types'

export const FieldContext = createContext<Partial<FieldContextProps>>(null)

export function useLinkField(value: unknown) {
  const field = useContext(FieldContext)

  if (field && !field.childFieldValue.current) {
    field.childFieldValue.current = value

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useWatch(value, () => {
      field.resetValidation()
      field.validateWithTrigger('onChange')
    })
  }
}
