import { createContext } from 'react'
import { SwipeProvide } from '../Swipe/index.types'

export const SwipeContext = createContext<Partial<SwipeProvide>>({})
