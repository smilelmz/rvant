import { MouseEvent } from 'react'
import { EventFunction } from '../type'

export type OverlayProps = {
  show?: boolean
  zIndex?: number
  duration?: number
  lockScroll?: boolean
  click?: EventFunction<MouseEvent>
} & Pick<React.HTMLAttributes<HTMLDivElement>, 'style' | 'className'>
