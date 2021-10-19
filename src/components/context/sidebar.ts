import { createContext } from 'react'
import { SidebarProvide } from '../Sidebar/types'

export const SidebarContext = createContext<Partial<SidebarProvide>>({})
