import { createContext } from 'react'
import { SidebarProvide } from '../Sidebar/index.types'

export const SidebarContext = createContext<Partial<SidebarProvide>>({})
