import { MouseEvent } from 'react'
import { EventFunction } from '../type'

export type OverlayProps = {
  show?: boolean
  zIndex?: number
  duration?: number | string
  lockScroll?: boolean
  click?: EventFunction<MouseEvent>
} & Pick<React.HTMLAttributes<HTMLDivElement>, 'style' | 'className'>
