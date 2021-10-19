import React, { useEffect, useRef, useState, useImperativeHandle } from 'react'
import { ProgressHandler, ProgressProps } from './types'
import { createNamespace, addUnit } from '../utils'
import { useWatch } from '../composables'

const [bem] = createNamespace('progress')
const Progress = (
  {
    style = {},
    className,
    color,
    inactive,
    pivotText,
    textColor,
    pivotColor,
    trackColor,
    strokeWidth,
    percentage,
    showPivot = true
  }: ProgressProps,
  ref: React.Ref<ProgressHandler>
) => {
  const root = useRef<HTMLDivElement>(null)
  const pivotRef = useRef<HTMLElement>(null)
  const [rootWidth, setRootWidth] = useState(0)
  const [pivotWidth, setPivotWidth] = useState(0)
  const background = inactive ? '#cacaca' : color

  const resize = () => {
    setRootWidth(root.current ? root.current.offsetWidth : 0)
    setPivotWidth(pivotRef.current ? pivotRef.current.offsetWidth : 0)
  }
  const renderPivot = () => {
    const text = pivotText ?? `${percentage}%`
    const show = showPivot && text

    if (show) {
      const left = ((rootWidth - pivotWidth) * +percentage) / 100
      const style = {
        color: textColor,
        left: `${left}px`,
        background: pivotColor || background
      }

      return (
        <span ref={pivotRef} style={style} className={bem('pivot')}>
          {text}
        </span>
      )
    }
  }
  useWatch(showPivot, resize)
  useWatch(pivotText, resize)
  useEffect(() => {
    resize()
  }, [])
  useImperativeHandle(ref, () => ({
    resize
  }))

  const rootStyle = {
    background: trackColor,
    height: addUnit(strokeWidth),
    ...style
  }

  const portionStyle = {
    background,
    width: `${(rootWidth * +percentage) / 100}px`
  }

  return (
    <div style={rootStyle} ref={root} className={`${bem()} ${className || ''}`}>
      <span className={bem('portion')} style={portionStyle}>
        {renderPivot()}
      </span>
    </div>
  )
}
export default React.memo(React.forwardRef(Progress))
