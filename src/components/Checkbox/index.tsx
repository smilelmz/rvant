/* eslint-disable jsx-a11y/role-has-required-aria-props */
import React, { useState, useEffect } from 'react'
import { BASE_PREFIX } from '../utils/constant'
import { CheckboxProps } from './index.types'
import classnames from '../utils/classNames'
import { addUnit } from '../utils'
import Icon from '../Icon'

const baseClass = `${BASE_PREFIX}checkbox`
const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  change,
  click,
  name,
  shape = 'round',
  checkedColor = '#1989fa',
  icon,
  iconSize,
  labelText,
  disabled,
  labelDisabled,
  labelPosition = 'right',
}) => {
  const [isChecked, handleChecked] = useState(checked)
  const handleClick = (e: any) => {
    return click && click(e)
  }
  useEffect(() => {
    return change && change(isChecked)
  }, [isChecked])
  const handleContainerClick = (e: any) => {
    e.preventDefault()
    if (!disabled && !labelDisabled) {
      handleChecked(!isChecked)
      handleClick(e)
    }
  }
  const handleIconClick = (e: any) => {
    e.preventDefault()
    if (!disabled) {
      handleChecked(!isChecked)
      handleClick(e)
    }
  }
  const genIcon = () => {
    const iconStyle: Record<string, any> = {}
    if (checkedColor && checked && !disabled) {
      iconStyle.borderColor = checkedColor
      iconStyle.backgroundColor = checkedColor
    }
    return (
      <div
        key='icon'
        className={classnames(`${baseClass}__icon`, [
          { [shape]: true },
          { disabled },
          { checked }
        ])}
        style={{ fontSize: addUnit(iconSize) }}
        onClick={handleIconClick}
      >
        {icon || <Icon name='success' style={iconStyle} />}
      </div>
    )
  }
  const genLabel = () => {
    if (labelText) {
      return (
        <label
          key='label'
          htmlFor={name}
          className={classnames(`${baseClass}__label`, [
            { [labelPosition]: true },
            { disabled }
          ])}
        >
          {labelText}
        </label>
      )
    }
  }
  const className = classnames(baseClass, [
    { disabled },
    { 'label-disabled': labelDisabled }
  ])
  const Children: any[] = [genIcon()]
  if (labelPosition === 'left') {
    Children.unshift(genLabel())
  } else {
    Children.push(genLabel())
  }
  return (
    <div
      role='checkbox'
      className={className}
      aria-checked={checked}
      tabIndex={0}
      onClick={handleContainerClick}
    >
      {Children}
    </div>
  )
}
export default Checkbox
