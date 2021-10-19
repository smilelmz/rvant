/* eslint-disable no-useless-return */
import React, { MouseEvent, TouchEvent, useMemo, useRef } from 'react'
import { RateProps } from './types'
import { addUnit, preventDefault, createNamespace } from '../utils'
import { useTouch, useRefs } from '../composables'
import Icon from '../Icon'

const [bem] = createNamespace('rate')

type RateStatus = 'full' | 'half' | 'void'

type RangeItem = {
  left: number
  score: number
}

type RateListItem = {
  value: number
  status: RateStatus
}
const getRateStatus = (
  value: number,
  index: number,
  allowHalf: any,
  readonly: boolean
): RateListItem => {
  if (value >= index) {
    return { status: 'full', value: 1 }
  }

  if (value + 0.5 >= index && allowHalf && !readonly) {
    return { status: 'half', value: 0.5 }
  }

  if (value + 1 >= index && allowHalf && readonly) {
    const cardinal = 10 ** 10
    return {
      status: 'half',
      value: Math.round((value - index + 1) * cardinal) / cardinal
    }
  }

  return { status: 'void', value: 0 }
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
  const touch = useTouch()
  const ranges = useRef<RangeItem[]>([])
  const [itemRefs, setItemRefs] = useRefs<HTMLDivElement>()
  const untouchable = () => readonly || disabled || !touchable
  const list: RateListItem[] = useMemo(
    () =>
      Array(count)
        .fill('')
        .map((_, i) => getRateStatus(value, i + 1, allowHalf, readonly)),
    [count, value, allowHalf, readonly]
  )
  const updateRanges = () => {
    const rects = itemRefs.current.map((item) => item.getBoundingClientRect())

    ranges.current = []
    rects.forEach((rect, index) => {
      if (allowHalf) {
        ranges.current.push(
          { score: index + 0.5, left: rect.left },
          { score: index + 1, left: rect.left + rect.width / 2 }
        )
      } else {
        ranges.current.push({ score: index + 1, left: rect.left })
      }
    })
  }
  const getScoreByPosition = (x: number) => {
    for (let i = ranges.current.length - 1; i > 0; i--) {
      if (x > ranges.current[i].left) {
        return ranges.current[i].score
      }
    }
    return allowHalf ? 0.5 : 1
  }
  const select = (index: number) => {
    if (!disabled && !readonly && index !== value) {
      change && change(index)
    }
  }
  const onTouchStart = (event: TouchEvent) => {
    if (untouchable()) {
      return
    }
    touch.start(event)
    updateRanges()
  }
  const onTouchMove = (event: TouchEvent) => {
    if (untouchable()) {
      return
    }
    touch.move(event)
    if (touch.isHorizontal()) {
      const { clientX } = event.touches[0]
      preventDefault(event)
      select(getScoreByPosition(clientX))
    }
  }
  const renderStar = (item: RateListItem, index: number) => {
    const score = index + 1
    const isFull = item.status === 'full'
    const isVoid = item.status === 'void'
    const renderHalf = allowHalf && item.value > 0 && item.value < 1
    let style
    if (gutter && score !== +count) {
      style = { paddingRight: addUnit(gutter) }
    }
    const onClickItem = (event: MouseEvent) => {
      updateRanges()
      select(allowHalf ? getScoreByPosition(event.clientX) : score)
    }
    return (
      <div
        ref={setItemRefs(index)}
        key={index}
        role='radio'
        style={style}
        className={bem('item')}
        tabIndex={0}
        aria-setsize={count}
        aria-posinset={score}
        aria-checked={!isVoid}
        onClick={onClickItem}
      >
        <Icon
          className={bem('icon', { disabled, full: isFull })}
          size={size}
          name={isFull ? icon : voidIcon}
          color={disabled ? disabledColor : isFull ? color : voidColor}
          classPrefix={iconPrefix}
          data-score={score}
        />
        {renderHalf && (
          <Icon
            size={size}
            name={isVoid ? voidIcon : icon}
            className={bem('icon', ['half', { disabled, full: !isVoid }])}
            color={disabled ? disabledColor : isVoid ? voidColor : color}
            classPrefix={iconPrefix}
            data-score={score - 0.5}
          />
        )}
      </div>
    )
  }

  return (
    <div
      className={bem({
        readonly,
        disabled
      })}
      tabIndex={0}
      role='radiogroup'
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
    >
      {list.map(renderStar)}
    </div>
  )
}

export default React.memo(Rate)
