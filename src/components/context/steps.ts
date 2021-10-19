import { createContext } from 'react'
import { ShardStepProps } from '../Steps/types'

export const StepsContext = createContext<Partial<ShardStepProps>>(undefined)
