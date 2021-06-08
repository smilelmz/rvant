import { createContext } from 'react'
import { ICollapseProvide } from '../Collapse/index.types'

export const CollapseContext = createContext<Partial<ICollapseProvide>>(
  undefined
)
