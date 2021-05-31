import { createContext } from 'react'
import { GridParent } from '../Grid/index.types'

export const GridContext = createContext<Partial<GridParent>>(undefined)
