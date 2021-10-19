import React from 'react'
import { GridProps } from './types'
import { createNamespace, addUnit } from '../utils'
import { GridContext } from '../context'

const [bem] = createNamespace('grid')
const Grid: React.FC<GridProps> = ({
  style = {},
  className = '',
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
    <GridContext.Provider
      value={{
        square,
        gutter,
        iconSize,
        direction,
        clickable,
        columnNum,
        center,
        border
      }}
    >
      <div
        style={{
          paddingLeft: addUnit(gutter),
          ...style
        }}
        className={`${bem([direction])} ${className}`}
      >
        {React.Children.map(children, (child: any, index: number) => {
          return React.cloneElement(child, {
            index
          })
        })}
      </div>
    </GridContext.Provider>
  )
}
export default React.memo(Grid)
