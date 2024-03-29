import React, { MouseEvent, useMemo } from 'react'
import { createNamespace } from '../utils'
import { RowProps, RowSpaces } from './types'

const [bem] = createNamespace('row')
const Row: React.FC<RowProps> = ({
  align,
  justify,
  gutter = 0,
  wrap = true,
  click,
  children = []
}) => {
  const groups = useMemo(() => {
    const groups: number[][] = [[]]
    let totalSpan = 0
    let arr = []
    if (children) {
      arr = children instanceof Array ? children : [children]
    }
    arr.forEach((child, index) => {
      totalSpan += Number(child.span)

      if (totalSpan > 24) {
        groups.push([index])
        totalSpan -= 24
      } else {
        groups[groups.length - 1].push(index)
      }
    })

    return groups
  }, [children])
  const spaces = useMemo(() => {
    const gutterNum = Number(gutter || 0)
    const spaces: RowSpaces = []

    if (!gutterNum) {
      return spaces
    }

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
  }, [])
  return (
    <div
      className={bem({
        [`align-${align}`]: align,
        [`justify-${justify}`]: justify,
        nowrap: !wrap
      })}
      onClick={(e: MouseEvent) => click && click(e)}
    >
      {React.Children.map(children, (child: any, index) => {
        const config: Record<string, string | number | any[]> = {
          index,
          spaces
        }
        return React.cloneElement(child, config)
      })}
    </div>
  )
}

export default React.memo(Row)
