import React from 'react'
import { BASE_PREFIX } from '../utils/constant'
import { IconProps } from './index.types'
import { addUnit, isDef } from '../utils'
import classnames from '../utils/classNames'

import Info from '../Info'

const baseClass = `${BASE_PREFIX}icon`
const isImage = (name?: string): boolean => {
  return name ? name.indexOf('/') !== -1 : false
}

const LEGACY_MAP: Record<string, string> = {
  medel: 'medal',
  'medel-o': 'medal-o'
}

function correctName(name?: string) {
  return (name && LEGACY_MAP[name]) || name
}

const Icon: React.FC<IconProps> = ({
  className,
  style,
  dot,
  tag,
  name,
  size,
  info,
  badge,
  color,
  classPrefix = baseClass,
  click
}) => {
  const CustomTag = tag || 'i' || 'span'
  const iconName = correctName(name)
  const imageIcon = isImage(iconName)
  const classNames = `${classPrefix} ${
    imageIcon ? '' : `${classPrefix}-${iconName}`
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
      onClick={(e) => click && click(e)}
    >
      {imageIcon && (
        <img className={classnames(`${baseClass}__image`)} src={iconName} />
      )}
      <Info dot={dot} info={isDef(badge) ? badge : info} />
    </CustomTag>
  )
}

export default Icon
