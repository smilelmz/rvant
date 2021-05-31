import { createContext } from 'react'
import { CheckerParent } from '../Checkbox/index.types'

export const CheckboxGroupContext = createContext<Partial<CheckerParent>>({})
