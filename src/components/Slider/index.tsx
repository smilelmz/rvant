import React, { MouseEvent, TouchEvent, useRef, useState } from 'react'
import { SliderProps, SliderValue } from './index.types'
import {
  createNamespace,
  addUnit,
  getSizeStyle,
  preventDefault,
  stopPropagation
} from '../utils'

import { getRect, useTouch } from '../composables'

const [bem] = createNamespace('slider')
const Slider = ({
  style = {},
  className,
  range,
  disabled,
  readonly,
  vertical,
  barHeight,
  buttonSize,
  activeColor,
  inactiveColor,
  min = 0,
  max = 100,
  step = 1,
  value = 0,
  button,
  change,
  dragEnd,
  dragMove,
  dragStart
}: SliderProps) => {
  const [modelValue, setModelValue] = useState<SliderValue>(value)
  const inited = useRef(false)
  const buttonIndex = useRef(-1)
  const startValue = useRef<SliderValue>()
  const currentValue = useRef<SliderValue>()
  const root = useRef<HTMLDivElement>(null)
  const dragStatus = useRef<'start' | 'draging' | ''>()
  const touch = useTouch()
  const scope = Number(max) - Number(min)

  const wrapperStyle = () => {
    const crossAxis = vertical ? 'width' : 'height'
    const obj = {} as Record<string, any>
    if (inactiveColor) obj.background = inactiveColor
    if (barHeight) obj[crossAxis] = addUnit(barHeight)
    return {
      ...obj,
      ...style
    }
  }

  const isRange = (val: unknown): val is number[] =>
    !!range && Array.isArray(val)

  // 计算选中条的长度百分比
  const calcMainAxis = () => {
    if (isRange(modelValue)) {
      return `${((modelValue[1] - modelValue[0]) * 100) / scope}%`
    }
    return `${((modelValue - Number(min)) * 100) / scope}%`
  }

  // 计算选中条的开始位置的偏移量
  const calcOffset = () => {
    if (isRange(modelValue)) {
      return `${((modelValue[0] - Number(min)) * 100) / scope}%`
    }
    return '0%'
  }

  const barStyle = () => {
    const mainAxis = vertical ? 'height' : 'width'
    return {
      [mainAxis]: calcMainAxis(),
      left: vertical ? undefined : calcOffset(),
      top: vertical ? calcOffset() : undefined,
      background: activeColor,
      transition: dragStatus ? 'none' : undefined
    }
  }

  const format = (value: number) => {
    value = Math.max(+min, Math.min(value, +max))
    return Math.round(value / +step) * +step
  }

  const isSameValue = (newValue: SliderValue, oldValue: SliderValue) =>
    JSON.stringify(newValue) === JSON.stringify(oldValue)

  // 处理两个滑块重叠之后的情况
  const handleOverlap = (value: number[]) => {
    if (value[0] > value[1]) {
      return value.slice(0).reverse()
    }
    return value
  }

  const updateValue = (value: SliderValue, end?: boolean) => {
    if (isRange(value)) {
      value = handleOverlap(value).map(format)
    } else {
      value = format(value)
    }

    if (!isSameValue(value, modelValue)) {
      setModelValue(value)
      dragMove && dragMove(value)
    }

    if (end && !isSameValue(value, startValue.current as SliderValue)) {
      change && change(value)
    }
  }

  const onClick = (event: MouseEvent) => {
    event.stopPropagation()

    if (disabled || readonly) {
      return
    }

    const rect = getRect(root)
    const delta = vertical
      ? event.clientY - rect.top
      : event.clientX - rect.left
    const total = vertical ? rect.height : rect.width
    const value = Number(min) + (delta / total) * scope

    if (isRange(modelValue)) {
      const [left, right] = modelValue
      const middle = (left + right) / 2

      if (value <= middle) {
        updateValue([value, right], true)
      } else {
        updateValue([left, value], true)
      }
    } else {
      updateValue(value, true)
    }
  }

  const onTouchStart = (event: TouchEvent) => {
    if (disabled || readonly) {
      return
    }

    touch.start(event)
    currentValue.current = modelValue

    if (isRange(currentValue.current)) {
      startValue.current = currentValue.current.map(format)
    } else {
      startValue.current = format(currentValue.current as number)
    }

    dragStatus.current = 'start'
  }

  const onTouchMove = (event: TouchEvent) => {
    if (disabled || readonly) {
      return
    }

    if (dragStatus.current === 'start') {
      dragStart && dragStart()
    }

    preventDefault(event, true)
    touch.move(event)
    dragStatus.current = 'draging'

    const rect = getRect(root)
    const delta = vertical ? touch.deltaY.current : touch.deltaX.current
    const total = vertical ? rect.height : rect.width
    const diff = (delta / total) * scope

    if (isRange(startValue.current)) {
      ;(currentValue.current as number[])[buttonIndex.current] =
        startValue.current[buttonIndex.current] + diff
    } else {
      currentValue.current = (startValue.current as number) + diff
    }
    updateValue(currentValue.current as SliderValue)
  }

  const onTouchEnd = () => {
    if (disabled || readonly) {
      return
    }

    if (dragStatus.current === 'draging') {
      updateValue(currentValue.current as SliderValue, true)
      dragEnd && dragEnd()
    }

    dragStatus.current = ''
  }

  const renderButton = (index?: number) => {
    const getClassName = () => {
      if (typeof index === 'number') {
        const position = ['left', 'right']
        return `button-wrapper-${position[index]}`
      }
      return `button-wrapper`
    }

    const curValue =
      typeof index === 'number'
        ? (modelValue as number[])[index]
        : (modelValue as number)

    return (
      <div
        key={`sliderButton${index || ''}`}
        role='slider'
        className={bem(getClassName())}
        tabIndex={disabled || readonly ? -1 : 0}
        aria-valuemin={+min}
        aria-valuenow={curValue}
        aria-valuemax={+max}
        aria-orientation={vertical ? 'vertical' : 'horizontal'}
        onTouchStart={(e: TouchEvent) => {
          if (typeof index === 'number') {
            // save index of current button
            buttonIndex.current = index
          }
          onTouchStart(e)
        }}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
        onClick={stopPropagation}
      >
        {button || (
          <div className={bem('button')} style={getSizeStyle(buttonSize)} />
        )}
      </div>
    )
  }

  if (!inited.current) {
    inited.current = true
    updateValue(modelValue)
  }
  return (
    <div
      ref={root}
      className={`${bem({
        vertical,
        disabled
      })} ${className || ''}`}
      onClick={onClick}
      style={wrapperStyle()}
    >
      <div className={bem('bar')} style={barStyle()}>
        {range ? [renderButton(0), renderButton(1)] : renderButton()}
      </div>
    </div>
  )
}
export default React.memo(Slider)
