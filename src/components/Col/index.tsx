import React from 'react'
import { BASE_PREFIX } from '../utils/constant'
import { ColProps } from './index.types'
import classnames from '../utils/classNames'

const baseClass = `${BASE_PREFIX}col`
const Col: React.FC<ColProps> = ({
  offset,
  span,
  children,
  index = 0,
  spaces,
  click
}) => {
  let style: Record<string, string | number | null> = {}
  if (spaces && spaces[index]) {
    const { left, right } = spaces[index]
    style = {
      paddingLeft: left ? `${left}px` : null,
      paddingRight: right ? `${right}px` : null
    }
  }
  const c1 = {}
  c1[`${span}`] = true
  const c2 = {}
  c2[`offset-${offset}`] = offset
  const className = classnames(baseClass, [c1, c2])
  return (
    <div style={style} className={className} onClick={(e) => click && click(e)}>
      {children}
    </div>
  )
}

export default Col
