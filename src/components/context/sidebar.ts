import { createContext } from 'react'
import { SidebarProvider } from '../Sidebar/index.types'

export const SidebarContext = createContext<Partial<SidebarProvider>>({})
