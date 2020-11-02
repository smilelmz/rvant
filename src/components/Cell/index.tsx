/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react'
import { BASE_PREFIX } from '../utils/constant'
import { isDef } from '../utils'
import { CellProps } from './index.types'
import classnames from '../utils/classNames'
import Icon from '../Icon'

const baseClass = `${BASE_PREFIX}cell`
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
  const Label = () => {
    const showLabel = isDef(label)
    if (showLabel) {
      return (
        <div
          className={`${classnames(`${baseClass}__label`)} ${labelClass || ''}`}
        >
          {label}
        </div>
      )
    }
  }
  const Title = () => {
    if (showTitle) {
      return (
        <div
          className={`${classnames(`${baseClass}__title`)} ${titleClass || ''}`}
          style={titleStyle || {}}
        >
          {typeof title === 'object' ? title : <span>{title}</span>}
          {Label()}
        </div>
      )
    }
    return null
  }
  const Value = () => {
    const showValue = isDef(value)

    if (showValue) {
      return (
        <div
          className={`${classnames(`${baseClass}__value`, [
            { alone: !showTitle }
          ])} ${valueClass || ''}`}
        >
          {typeof value === 'object' ? value : <span>{value}</span>}
        </div>
      )
    }
  }
  const LeftIcon = () => {
    if (typeof icon === 'object') {
      return icon
    }
    if (icon) {
      return (
        <Icon
          className={classnames(`${baseClass}__left-icon`)}
          name={icon as string}
          classPrefix={iconPrefix}
        />
      )
    }
  }
  const RightIcon = () => {
    if (typeof rightIcon === 'object') {
      return rightIcon
    }
    if (rightIcon) {
      return (
        <Icon
          className={classnames(`${baseClass}__right-icon`)}
          name={rightIcon as string}
          classPrefix={iconPrefix}
        />
      )
    }
    if (isLink) {
      return (
        <Icon
          className={classnames(`${baseClass}__right-icon`)}
          name={arrowDirection ? `arrow-${arrowDirection}` : 'arrow'}
        />
      )
    }
  }
  const onClick = (e: any) => {
    click && click(e)
  }
  const className = classnames(baseClass, [
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
    onClick
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
      {LeftIcon()}
      {Title()}
      {Value()}
      {RightIcon()}
      {children}
    </CustomTag>
  )
}

export default Cell
