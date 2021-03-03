import { createContext } from 'react'
import { LocaleType } from './index.types'

const LocalContext = createContext<
  (Partial<LocaleType> & { exist?: boolean }) | undefined
>(undefined)

export default LocalContext
