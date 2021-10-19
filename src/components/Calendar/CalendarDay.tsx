/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { CSSProperties, useMemo } from 'react'
import { ValueFunction } from '@/components/type'
import { DayItem } from './types'
import { bem } from './utils'

interface IProps {
  color?: string
  index?: number
  rowHeight?: string
  offset?: number
  item: DayItem
  click?: ValueFunction<DayItem>
}

const CalendarDay: React.FC<IProps> = ({
  color,
  index,
  rowHeight,
  offset = 0,
  item,
  click
}: IProps) => {
  const style = useMemo(() => {
    const style: CSSProperties = {
      height: rowHeight
    }
    if (item.type === 'placeholder') {
      style.width = '100%'
      return style
    }
    if (index === 0) {
      style.marginLeft = `${(100 * offset) / 7}%`
    }

    if (color) {
      switch (item.type) {
        case 'end':
        case 'start':
        case 'start-end':
        case 'multiple-middle':
        case 'multiple-selected':
          style.background = color
          break
        case 'middle':
          style.color = color
          break
        default:
      }
    }
    return style
  }, [item, index, color, offset, rowHeight])
  const onClick = () => {
    if (item.type !== 'disabled') {
      click && click(item)
    }
  }
  const renderContent = () => {
    const { type, text, topInfo, bottomInfo } = item
    const TopInfo = topInfo && (
      <div className={bem('top-info')} key='top-info'>
        {topInfo}
      </div>
    )
    const BottomInfo = bottomInfo && (
      <div className={bem('bottom-info')} key='bottom-info'>
        {bottomInfo}
      </div>
    )
    const Nodes = [TopInfo, text, BottomInfo]
    if (type === 'selected') {
      return (
        <div
          className={bem('selected-day')}
          style={{
            width: rowHeight,
            height: rowHeight,
            background: color
          }}
        >
          {Nodes}
        </div>
      )
    }
    return Nodes
  }
  return (
    <div
      role='gridcell'
      style={style}
      className={`${bem('day', item.type)} ${item.className || ''}`}
      tabIndex={item.type === 'disabled' ? undefined : -1}
      onClick={onClick}
    >
      {renderContent()}
    </div>
  )
}

export default React.memo(CalendarDay)
