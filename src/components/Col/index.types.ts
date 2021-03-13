import { EventFunction } from '../type'

export interface ColProps {
  span?: string | number
  offset?: string | number
  index?: number
  spaces?: any[]
  click?: EventFunction<Event>
}
