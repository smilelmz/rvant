import { createContext } from 'react'
import { CheckerParent } from '../Checkbox/types'

export const CheckboxGroupContext = createContext<Partial<CheckerParent>>({})
