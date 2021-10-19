import React, { MouseEvent, TouchEvent } from 'react'
import { IconProps } from './types'
import { addUnit, createNamespace } from '../utils'
import Badge from '../Badge'

const [bem] = createNamespace('icon')
const isImage = (name?: string): boolean => {
  return name ? name.indexOf('/') !== -1 : false
}

const Icon: React.FC<IconProps> = ({
  className = '',
  style = {},
  dot,
  tag,
  name,
  size,
  badge,
  color,
  classPrefix = bem(),
  click,
  touchstart
}) => {
  const CustomTag = tag || 'i'
  const isImageIcon = isImage(name)
  const classNames = `${classPrefix} ${
    isImageIcon ? '' : `${classPrefix}-${name}`
  } ${className}`
  const iconStyle = {
    color,
    fontSize: addUnit(size),
    ...style
  }

  return (
    <CustomTag
      className={classNames}
      style={iconStyle}
      onClick={(e: MouseEvent) => click && click(e)}
      onTouchStart={(e: TouchEvent) => touchstart && touchstart(e)}
    >
      {isImageIcon && <img className={bem(`image`)} src={name} />}
      <Badge dot={dot} content={badge || ''} className={bem(`info`)} />
    </CustomTag>
  )
}

export default React.memo(Icon)
