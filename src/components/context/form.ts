import { createContext } from 'react'
import { FormShareProps } from '../Form/index.types'

export const FormContext = createContext<Partial<FormShareProps>>({})
