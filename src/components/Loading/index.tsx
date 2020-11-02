import React from 'react'
import { BASE_PREFIX } from '../utils/constant'
import { LoadingProps } from './index.types'
import { addUnit } from '../utils'
import classnames from '../utils/classNames'

const baseClass = `${BASE_PREFIX}loading`
const LoadingIcon = (type: any) => {
  if (type === 'spinner') {
    const Spin = []
    for (let i = 0; i < 12; i ++) {
      Spin.push(<i key={i} />)
    }
    return Spin
  }
  const className = classnames(`${baseClass}__circular`, [])
  return (
    <svg className={className} viewBox='25 25 50 50'>
      <circle cx='50' cy='50' r='20' fill='none' />
    </svg>
  )
}

const LoadingText = (textSize: any, children: any) => {
  if (children) {
    const style = textSize && {
      fontSize: addUnit(textSize)
    }
    const className = classnames(`${baseClass}__text`, [])
    return (
      <span className={className} style={style}>
        {children}
      </span>
    )
  }
  return null
}

const Loading: React.FC<LoadingProps> = ({
  className,
  type = 'circular',
  size,
  color = '#c9c9c9',
  vertical,
  textSize,
  children
}: LoadingProps) => {
  const style: { [key: string]: string } = { color }
  if (size) {
    const iconSize = addUnit(size) as string
    style.width = iconSize
    style.height = iconSize
  }
  const classNames = classnames(baseClass, [{ type }, { vertical }])
  const spinnerClass = classnames(`${baseClass}__spinner`, [{ type }])
  return (
    <div className={`${classNames} ${className}`}>
      <span className={spinnerClass} style={style}>
        {LoadingIcon(type)}
      </span>
      {LoadingText(textSize, children)}
    </div>
  )
}

export default Loading
