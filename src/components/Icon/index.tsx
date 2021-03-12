import React from 'react'
import { IconProps } from './index.types'
import { addUnit, createNamespace } from '../utils'
import Badge from '../Badge'

const [bem] = createNamespace('icon')
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
  badge,
  color,
  classPrefix = bem(),
  click
}) => {
  const CustomTag = tag || 'i'
  const isImageIcon = isImage(name)
  const iconName = correctName(name)
  const classNames = `${classPrefix} ${
    isImageIcon ? '' : `${classPrefix}-${iconName}`
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
      {isImageIcon && <img className={bem(`image`)} src={iconName} />}
      <Badge dot={dot} content={badge || ''} className={bem(`info`)} />
    </CustomTag>
  )
}

export default Icon
