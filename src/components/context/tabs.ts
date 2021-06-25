import { createContext } from 'react'
import { TabsProvide } from '../Tabs/index.types'

type TabProvider = {
  active: boolean
}

export const TabsContext = createContext<Partial<TabsProvide>>({})
export const TabContext = createContext<Partial<TabProvider>>({})
