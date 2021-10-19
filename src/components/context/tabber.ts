import { createContext } from 'react'
import { TabbarProvide } from '../Tabbar/types'

export const TabbarContext = createContext<Partial<TabbarProvide>>({})
