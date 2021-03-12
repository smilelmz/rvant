/* eslint-disable no-useless-return */
import React, { TouchEvent } from 'react'
import { RateProps } from './index.types'
import { addUnit, preventDefault, createNamespace } from '../utils'
import { useTouch, useRefs } from '../composables'
import Icon from '../Icon'

const [bem] = createNamespace('rate')

type RateStatus = 'full' | 'half' | 'void'
const getRateStatus = (
  value: number,
  index: number,
  allowHalf: any
): RateStatus => {
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
  let ranges: Array<{ left: number; score: number }>
  const touch = useTouch()
  const [itemRefs, setItemRefs] = useRefs<HTMLDivElement>()
  const untouchable = () => readonly || disabled || !touchable
  const list: RateStatus[] = Array(count)
    .fill('')
    .map((_, i) => getRateStatus(value, i + 1, allowHalf))

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
  const onTouchStart = (event: TouchEvent) => {
    if (untouchable()) {
      return
    }
    touch.start(event)
    const rects = itemRefs.current.map((item) => item.getBoundingClientRect())
    ranges = []
    rects.forEach((rect, index) => {
      if (allowHalf) {
        ranges.push(
          { score: index + 0.5, left: rect.left },
          { score: index + 1, left: rect.left + rect.width / 2 }
        )
      } else {
        ranges.push({ score: index + 1, left: rect.left })
      }
    })
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
  const renderStar = (status: RateStatus, index: number) => {
    const score = index + 1
    const isFull = status === 'full'
    const isVoid = status === 'void'
    let style
    if (gutter && score !== +count) {
      style = { paddingRight: addUnit(gutter) }
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
      >
        <Icon
          className={bem('icon', { disabled, full: isFull })}
          size={size}
          name={isFull ? icon : voidIcon}
          color={disabled ? disabledColor : isFull ? color : voidColor}
          classPrefix={iconPrefix}
          data-score={score}
          click={() => {
            select(score)
          }}
        />
        {allowHalf && (
          <Icon
            size={size}
            name={isVoid ? voidIcon : icon}
            className={bem('icon', ['half', { disabled, full: !isVoid }])}
            color={disabled ? disabledColor : isVoid ? voidColor : color}
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
export default Rate
