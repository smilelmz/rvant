import React, { CSSProperties, useMemo } from 'react'
import { CircleProps } from './index.types'
import {
  isObject,
  getSizeStyle,
  createNamespace,
  raf,
  cancelRaf
} from '../utils'
import { useWatch } from '../composables'

const [bem] = createNamespace('circle')
let uid = 0

function format(rate: string | number) {
  return Math.min(Math.max(+rate, 0), 100)
}

function getPath(clockwise: boolean, viewBoxSize: number) {
  const sweepFlag = clockwise ? 1 : 0
  return `M ${viewBoxSize / 2} ${viewBoxSize /
    2} m 0, -500 a 500, 500 0 1, ${sweepFlag} 0, 1000 a 500, 500 0 1, ${sweepFlag} 0, -1000`
}
const Circle: React.FC<CircleProps> = ({
  className,
  style = {},
  text,
  size,
  color,
  layerColor,
  strokeLinecap,
  currentRate = 0,
  speed = 0,
  fill = 'none',
  rate = 100,
  strokeWidth = 40,
  clockwise = true,
  children,
  change
}) => {
  const id = `van-circle-${uid++}`
  const viewBoxSize = useMemo(() => +strokeWidth + 1000, [strokeWidth])
  const path = useMemo(() => getPath(clockwise, viewBoxSize), [
    clockwise,
    strokeWidth
  ])
  useWatch<string | number>(
    rate,
    (newRate) => {
      let rafId: number | undefined
      const startTime = Date.now()
      const startRate = currentRate
      const endRate = format(newRate || 0)
      const duration = Math.abs(((startRate - endRate) * 1000) / +speed)

      const animate = () => {
        const now = Date.now()
        const progress = Math.min((now - startTime) / duration, 1)
        const curRate = progress * (endRate - startRate) + startRate

        change && change(format(parseFloat(curRate.toFixed(1))))

        if (endRate > startRate ? curRate < endRate : curRate > endRate) {
          rafId = raf(animate)
        }
      }

      if (speed) {
        if (rafId) {
          cancelRaf(rafId)
        }
        rafId = raf(animate)
      } else {
        change && change(endRate)
      }
    },
    { immediate: true }
  )
  const renderHover = () => {
    const PERIMETER = 3140
    const offset = (PERIMETER * currentRate) / 100
    const targetColor = isObject(color) ? `url(#${id})` : color

    const style: CSSProperties = {
      stroke: targetColor,
      strokeWidth: `${+strokeWidth + 1}px`,
      strokeLinecap,
      strokeDasharray: `${offset}px ${PERIMETER}px`
    }

    return (
      <path
        d={path}
        style={style}
        className={bem('hover')}
        stroke={targetColor}
      />
    )
  }
  const renderLayer = () => {
    const style = {
      fill,
      stroke: layerColor,
      strokeWidth: `${strokeWidth}px`
    }

    return <path className={bem('layer')} style={style} d={path} />
  }
  const renderGradient = () => {
    if (!isObject(color)) {
      return
    }

    const Stops = Object.keys(color)
      .sort((a, b) => parseFloat(a) - parseFloat(b))
      .map((key, index) => (
        <stop key={index} offset={key} stopColor={color[key]} />
      ))

    return (
      <defs>
        <linearGradient id={id} x1='100%' y1='0%' x2='0%' y2='0%'>
          {Stops}
        </linearGradient>
      </defs>
    )
  }
  const renderText = () => {
    if (children) {
      return children
    }
    if (text) {
      return <div className={bem('text')}>{text}</div>
    }
  }
  return (
    <div
      className={`${bem()} ${className || ''}`}
      style={{ ...getSizeStyle(size), ...style }}
    >
      <svg viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}>
        {renderGradient()}
        {renderLayer()}
        {renderHover()}
      </svg>
      {renderText()}
    </div>
  )
}
export default Circle
