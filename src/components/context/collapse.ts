import { createContext } from 'react'
import { ICollapseProvide } from '../Collapse/types'

export const CollapseContext = createContext<Partial<ICollapseProvide>>(
  undefined
)
