import { createContext } from 'react'
import { FieldParentProps } from '../Field/index.types'

const FieldContext = createContext<Partial<FieldParentProps>>({})

export default FieldContext
