import { MouseEvent } from 'react'
import { EventFunction } from '../type'

export type SwipeItemProps = {
  index?: number
  click?: EventFunction<MouseEvent>
} & Pick<
  React.HTMLAttributes<HTMLDivElement>,
  'style' | 'className' | 'children'
>

export interface SwipeItemHandler {
  setOffset: (offset: number) => void
}
