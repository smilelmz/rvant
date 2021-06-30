import React, { TouchEvent } from 'react'
import { isDef, createNamespace, isElement } from '../utils'
import { CellProps } from './index.types'
import Icon from '../Icon'

const [bem] = createNamespace('cell')
const Cell: React.FC<CellProps> = ({
  style = {},
  className = '',
  title,
  value,
  label,
  size,
  icon,
  rightIcon,
  iconPrefix,
  url,
  border = true,
  replace = false,
  clickable = null,
  isLink = false,
  required = false,
  center = false,
  arrowDirection,
  titleStyle,
  titleClass = '',
  valueClass = '',
  labelClass = '',
  extra,
  children,
  click
}) => {
  const CustomTag = url ? 'a' : 'div'
  const showTitle = isDef(title)
  const renderLabel = () => {
    const showLabel = isDef(label)
    if (showLabel) {
      return <div className={`${bem('label')} ${labelClass}`}>{label}</div>
    }
    return <></>
  }
  const renderTitle = () => {
    if (showTitle) {
      return (
        <div
          className={`${bem('title')} ${titleClass}`}
          style={titleStyle || {}}
        >
          {typeof title === 'object' ? title : <span>{title}</span>}
          {renderLabel()}
        </div>
      )
    }
    return <></>
  }
  const renderValue = () => {
    const hasValue = children || isDef(value)
    if (hasValue) {
      const element = isElement(value) ? value : <span>{value}</span>
      return (
        <div className={`${bem('value', { alone: !showTitle })} ${valueClass}`}>
          {children || element}
        </div>
      )
    }
  }
  const renderLeftIcon = () => {
    if (isElement(icon)) {
      return icon
    }
    if (icon) {
      return (
        <Icon
          className={bem('left-icon')}
          name={icon as string}
          classPrefix={iconPrefix}
        />
      )
    }
    return <></>
  }
  const renderRightIcon = () => {
    if (isElement(rightIcon)) {
      return rightIcon
    }
    if (rightIcon) {
      return (
        <Icon
          className={bem('right-icon')}
          name={rightIcon as string}
          classPrefix={iconPrefix}
        />
      )
    }
    if (isLink) {
      return (
        <Icon
          className={bem('right-icon')}
          name={arrowDirection ? `arrow-${arrowDirection}` : 'arrow'}
        />
      )
    }
    return <></>
  }
  const classes = bem([
    { clickable: clickable ?? isLink },
    { center },
    { required },
    { borderless: !border },
    { large: size && size === 'large' }
  ])
  const props: Record<string, any> = {
    className: `${classes} ${className}`,
    style,
    role: clickable ? 'button' : undefined,
    tabIndex: clickable ? 0 : undefined,
    onTouchStart: (e: TouchEvent) => {
      e.nativeEvent.stopImmediatePropagation()
      click && click(e)
    }
  }
  if (url && CustomTag === 'a') {
    props.href = url
    if (replace) {
      props.target = '_self'
    } else {
      props.target = '_blank'
    }
  }
  return (
    <CustomTag {...props}>
      {renderLeftIcon()}
      {renderTitle()}
      {renderValue()}
      {renderRightIcon()}
      {extra || null}
    </CustomTag>
  )
}

export default React.memo(Cell)
