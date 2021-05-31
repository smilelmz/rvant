import { createContext } from 'react'
import { ShardStepProps } from '../Steps/index.types'

export const StepsContext = createContext<Partial<ShardStepProps>>(undefined)
