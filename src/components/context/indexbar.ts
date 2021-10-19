import { createContext } from 'react'
import { IndexBarProvider } from '../IndexBar/types'

export const IndexBarContext = createContext<Partial<IndexBarProvider>>({})
