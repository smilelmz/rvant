import { createContext } from 'react'
import { TabsProvide } from '../Tabs/index.types'

export const TabsContext = createContext<Partial<TabsProvide>>({})
