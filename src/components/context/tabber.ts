import { createContext } from 'react'
import { TabbarProvide } from '../Tabbar/index.types'

export const TabbarContext = createContext<Partial<TabbarProvide>>({})
