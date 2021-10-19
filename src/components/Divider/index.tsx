import React from 'react'
import { DividerProps } from './types'
import { createNamespace } from '../utils'

const [bem] = createNamespace('divider')
const Divider: React.FC<DividerProps> = ({
  style = {},
  className = '',
  dashed,
  hairline = true,
  contentPosition = 'center',
  children
}: DividerProps) => {
  return (
    <div
      role='separator'
      style={style}
      className={`${bem({
        dashed,
        hairline,
        [`content-${contentPosition}`]: !!children
      })} ${className}`}
    >
      {children}
    </div>
  )
}
export default React.memo(Divider)
