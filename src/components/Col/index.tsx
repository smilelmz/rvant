import React from 'react'
import { createNamespace } from '../utils'
import { ColProps } from './index.types'

const [bem] = createNamespace('col')
const Col: React.FC<ColProps> = ({
  offset,
  span,
  children,
  index = 0,
  spaces,
  click
}) => {
  let style: Record<string, any> = {}
  if (spaces && spaces[index]) {
    const { left, right } = spaces[index]
    style = {
      paddingLeft: left ? `${left}px` : null,
      paddingRight: right ? `${right}px` : null
    }
  }
  return (
    <div
      style={style}
      className={bem({ [`${span}`]: span, [`offset-${offset}`]: offset })}
      onClick={(e: any) => click && click(e)}
    >
      {children}
    </div>
  )
}

export default Col
