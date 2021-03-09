/* eslint-disable no-useless-return */
import React from 'react'
import { BASE_PREFIX } from '../utils/constant'
import { RateProps } from './index.types'
import { addUnit, getTouchStartPos, getTouchMovePos } from '../utils'
import classnames from '../utils/classNames'
import { preventDefault } from '../utils/dom/event'
import Icon from '../Icon'

const baseClass = `${BASE_PREFIX}rate`
let startPos: Record<string, any> = {}
let ranges: any[] = []
const getRateStatus = (value: number, index: number, allowHalf: any) => {
  if (value >= index) {
    return 'full'
  }

  if (value + 0.5 >= index && allowHalf) {
    return 'half'
  }

  return 'void'
}
const Rate: React.FC<RateProps> = ({
  value = 0,
  count = 5,
  size,
  gutter,
  color,
  voidColor,
  disabledColor,
  icon = 'star',
  voidIcon = 'star-o',
  iconPrefix,
  allowHalf,
  readonly,
  disabled,
  touchable = true,
  change
}) => {
  const refList: any[] = []
  const sizeWithUnit = addUnit(size)
  const gutterWithUnit = addUnit(gutter)
  const list = []
  for (let i = 1; i <= count; i++) {
    list.push(getRateStatus(value, i, allowHalf))
  }
  const genRef = (dom: any) => {
    refList.push(dom)
  }
  const select = (index: number) => {
    if (!disabled && !readonly && index !== value) {
      change && change(index)
    }
  }
  const getScoreByPosition = (x: number) => {
    for (let i = ranges.length - 1; i > 0; i--) {
      if (x > ranges[i].left) {
        return ranges[i].score
      }
    }
    return allowHalf ? 0.5 : 1
  }
  const onTouchStart = (event: any) => {
    if (readonly || disabled || !touchable) {
      return
    }
    startPos = getTouchStartPos(event)
    const rects = refList.map((item) => item.getBoundingClientRect())
    const curRanges: any[] = []
    rects.forEach((rect, index) => {
      if (allowHalf) {
        curRanges.push(
          { score: index + 0.5, left: rect.left },
          { score: index + 1, left: rect.left + rect.width / 2 }
        )
      } else {
        ranges.push({ score: index + 1, left: rect.left })
      }
    })
    ranges = curRanges
  }
  const onTouchMove = (event: any) => {
    if (readonly || disabled || !touchable) {
      return
    }
    const movePos = getTouchMovePos(event, startPos)
    if (movePos.direction === 'horizontal') {
      preventDefault(event)

      const { clientX } = event.touches[0]
      select(getScoreByPosition(clientX))
    }
  }
  const genStar = (status: any, index: number) => {
    const score = index + 1
    const isFull = status === 'full'
    const isVoid = status === 'void'
    let style
    if (gutterWithUnit && score !== +count) {
      style = { paddingRight: gutterWithUnit }
    }
    let iconColor: any = ''
    let halfColor: any = ''
    if (disabled) {
      iconColor = disabledColor
      halfColor = disabledColor
    } else {
      iconColor = isFull ? color : voidColor
      halfColor = isVoid ? voidColor : color
    }
    return (
      <div
        ref={genRef}
        key={index}
        role='radio'
        style={style}
        aria-setsize={count}
        aria-posinset={score}
        aria-checked={!isVoid}
        className={classnames(`${baseClass}__item`)}
      >
        <Icon
          className={classnames(`${baseClass}__icon`, [
            { disabled },
            { full: isFull }
          ])}
          size={sizeWithUnit}
          name={isFull ? icon : voidIcon}
          color={iconColor || ''}
          classPrefix={iconPrefix}
          data-score={score}
          click={() => {
            select(score)
          }}
        />
        {allowHalf && (
          <Icon
            size={sizeWithUnit}
            name={isVoid ? voidIcon : icon}
            className={classnames(`${baseClass}__icon`, [
              {
                half: true
              },
              {
                disabled
              },
              {
                full: !isVoid
              }
            ])}
            color={halfColor}
            classPrefix={iconPrefix}
            data-score={score - 0.5}
            click={() => {
              select(score - 0.5)
            }}
          />
        )}
      </div>
    )
  }

  const className = classnames(baseClass, [{ readonly }, { disabled }])
  return (
    <div
      className={className}
      tabIndex={0}
      role='radiogroup'
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
    >
      {list.map((item, index) => genStar(item, index))}
    </div>
  )
}
export default Rate
