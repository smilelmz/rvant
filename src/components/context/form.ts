import { createContext } from 'react'
import { FormShareProps } from '../Form/types'

export const FormContext = createContext<Partial<FormShareProps>>({})
