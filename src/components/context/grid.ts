import { createContext } from 'react'
import { GridParent } from '../Grid/types'

export const GridContext = createContext<Partial<GridParent>>(undefined)
