import { createContext } from 'react'
import { FormShareProps } from '../Form/index.types'

const FormContext = createContext<Partial<FormShareProps>>({})

export default FormContext
