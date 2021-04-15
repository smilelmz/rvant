import React from 'react'
import { PopoverProps } from './index.types'
import { createNamespace } from '../utils'

const [bem] = createNamespace('popover')
const Popover = ({ style = {}, className }: PopoverProps) => {
  return (
    <div style={style} className={`${bem()} ${className || ''}`}>
      123456
    </div>
  )
}
export default Popover
