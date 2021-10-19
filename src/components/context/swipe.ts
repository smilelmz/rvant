import { createContext } from 'react'
import { SwipeProvide } from '../Swipe/types'

export const SwipeContext = createContext<Partial<SwipeProvide>>({})
