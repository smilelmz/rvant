import React from 'react'
import { BASE_PREFIX } from '../utils/constant'
import { RowProps } from './index.types'
import classnames from '../utils/classNames'

const baseClass = `${BASE_PREFIX}row`
const Row: React.FC<RowProps> = ({
  type,
  align,
  justify,
  gutter,
  click,
  children = []
}) => {
  const calcSpaces = () => {
    if (!gutter) {
      return
    }
    const gutterNum = Number(gutter)
    let curChildren = []
    if (children) {
      curChildren = children instanceof Array ? children : [children]
    }
    const spaces: any[] = []
    const groups: Array<Array<number>> = [[]]
    let totalSpan = 0
    curChildren.forEach((item: any, index: number) => {
      totalSpan += Number(item.span)
      if (totalSpan > 24) {
        groups.push([index])
        totalSpan -= 24
      } else {
        groups[groups.length - 1].push(index)
      }
    })

    groups.forEach((group) => {
      const averagePadding = (gutterNum * (group.length - 1)) / group.length
      group.forEach((item, index) => {
        if (index === 0) {
          spaces.push({ right: averagePadding })
        } else {
          const left = gutterNum - spaces[item - 1].right
          const right = averagePadding - left
          spaces.push({ left, right })
        }
      })
    })
    return spaces
  }
  const spaces = calcSpaces()
  const flex = type === 'flex'
  const c1 = {}
  c1[`align-${align}`] = flex && align
  const c2 = {}
  c2[`justify-${justify}`] = flex && justify
  const className = classnames(baseClass, [{ flex }, c1, c2])
  return (
    <div className={className} onClick={(e) => click && click(e)}>
      {React.Children.map(children, (child: any, index) => {
        const config: Record<string, string | number | any[]> = { index }
        if (gutter) config.gutter = gutter
        if (spaces) config.spaces = spaces
        return React.cloneElement(child, config)
      })}
    </div>
  )
}

export default Row
