import { MouseEvent } from 'react'
import { EventFunction } from '../type'

export interface ColProps {
  span?: string | number
  offset?: string | number
  index?: number
  spaces?: any[]
  click?: EventFunction<MouseEvent>
}
