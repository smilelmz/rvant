import React, { useMemo } from 'react'
import { LoadingProps } from './types'
import { addUnit, createNamespace, getSizeStyle } from '../utils'

const [bem] = createNamespace('loading')
const SpinIcon: JSX.Element[] = Array(12)
  .fill(null)
  .map((_, index: number) => <i key={index.toString()} />)
const CircularIcon = (
  <svg className={bem('circular')} viewBox='25 25 50 50'>
    <circle cx='50' cy='50' r='20' fill='none' />
  </svg>
)
const Loading: React.FC<LoadingProps> = ({
  className,
  type = 'circular',
  size,
  color,
  vertical,
  textSize,
  textColor,
  children
}: LoadingProps) => {
  const spinnerStyle = useMemo(() => ({ color, ...getSizeStyle(size) }), [
    color,
    size
  ])
  const renderText = () => {
    if (children) {
      return (
        <span
          className={bem(`text`)}
          style={{
            fontSize: addUnit(textSize),
            color: textColor ?? color
          }}
        >
          {children}
        </span>
      )
    }
    return <></>
  }
  return (
    <div className={`${bem([type, { vertical }])} ${className}`}>
      <span className={bem('spinner', type)} style={spinnerStyle}>
        {type === 'spinner' ? SpinIcon : CircularIcon}
      </span>
      {renderText()}
    </div>
  )
}

export default React.memo(Loading)
