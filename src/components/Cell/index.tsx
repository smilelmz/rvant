import React from 'react'
import { isDef, createNamespace } from '../utils'
import { CellProps } from './index.types'
import Icon from '../Icon'

const [bem] = createNamespace('cell')
const Cell: React.FC<CellProps> = ({
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
  clickable = false,
  isLink = false,
  required = false,
  center = false,
  arrowDirection,
  titleStyle,
  titleClass,
  valueClass,
  labelClass,
  children,
  click
}) => {
  const CustomTag = url ? 'a' : 'div'
  const showTitle = isDef(title)
  const isElement = (el: any) => {
    if (Array.isArray(el)) {
      for (let i = 0; i < el.length; i++) {
        if (React.isValidElement(el[i])) return true
      }
    } else if (React.isValidElement(el)) return true
    return false
  }
  const renderLabel = () => {
    const showLabel = isDef(label)
    if (showLabel) {
      return (
        <div className={`${bem('label')} ${labelClass || ''}`}>{label}</div>
      )
    }
    return <></>
  }
  const renderTitle = () => {
    if (showTitle) {
      return (
        <div
          className={`${bem('title')} ${titleClass || ''}`}
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
    const showValue = isDef(value)

    if (showValue) {
      return (
        <div
          className={`${bem('value', { alone: !showTitle })} ${valueClass ||
            ''}`}
        >
          {isElement(value) ? value : <span>{value}</span>}
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
  const className = bem([
    { clickable: isLink || clickable },
    { center },
    { required },
    { borderless: !border },
    { large: size && size === 'large' }
  ])
  const props: Record<string, any> = {
    className,
    role: clickable ? 'button' : undefined,
    tabIndex: clickable ? 0 : undefined,
    onClick: (e: Event) => click && click(e)
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
      {children}
    </CustomTag>
  )
}

export default Cell
