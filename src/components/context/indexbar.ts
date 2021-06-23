import { createContext } from 'react'
import { IndexBarProvider } from '../IndexBar/index.types'

export const IndexBarContext = createContext<Partial<IndexBarProvider>>({})
