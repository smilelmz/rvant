import React from 'react'
import { GridProps } from './index.types'
import { createNamespace, addUnit } from '../utils'

const [bem] = createNamespace('grid')
const Grid: React.FC<GridProps> = ({
  style = {},
  className,
  square,
  gutter,
  iconSize,
  direction,
  clickable,
  columnNum = 4,
  center = true,
  border = true,
  children
}) => {
  return (
    <div
      style={{
        paddingLeft: addUnit(gutter),
        ...style
      }}
      className={`${bem([direction])} ${className || ''}`}
    >
      {React.Children.map(children, (child: any, index: number) => {
        const config: Record<string, any> = {
          square,
          gutter,
          iconSize,
          direction,
          clickable,
          columnNum,
          center,
          border
        }
        return React.cloneElement(child, {
          parent: config,
          index
        })
      })}
    </div>
  )
}
export default Grid
