import React from 'react'
import { RadioProps } from './types'
import { addUnit, createNamespace } from '../utils'
import Icon from '../Icon'

const [bem] = createNamespace('radio')
const Radio: React.FC<RadioProps> = ({
  value,
  change,
  click,
  name,
  shape = 'round',
  direction = 'vertical',
  checkedColor = '#1989fa',
  icon,
  iconSize,
  labelText,
  disabled,
  labelDisabled,
  labelPosition = 'right',
  children
}) => {
  const isChecked = value === name
  const handleClick = (e: any) => {
    change && change(name)
    return click && click(e)
  }
  const handleContainerClick = (e: any) => {
    e.preventDefault()
    if (!disabled && !labelDisabled) {
      handleClick(e)
    }
  }
  const handleIconClick = (e: any) => {
    e.preventDefault()
    if (!disabled) {
      handleClick(e)
    }
  }
  const genIcon = () => {
    const iconStyle: Record<string, any> = {}
    if (checkedColor && isChecked && !disabled) {
      iconStyle.borderColor = checkedColor
      iconStyle.backgroundColor = checkedColor
    }
    return (
      <div
        key='icon'
        className={bem(`icon`, [
          { [shape]: true },
          { disabled },
          { checked: isChecked }
        ])}
        style={{ fontSize: addUnit(iconSize) }}
        onClick={handleIconClick}
      >
        {icon || <Icon name='success' style={iconStyle} />}
      </div>
    )
  }
  const genLabel = () => {
    if (labelText || children) {
      return (
        <label
          key='label'
          htmlFor={name}
          className={bem(`label`, [{ [labelPosition]: true }, { disabled }])}
        >
          {labelText || children}
        </label>
      )
    }
  }
  const className = bem([
    { disabled },
    { 'label-disabled': labelDisabled },
    { [direction]: true }
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
      aria-checked={isChecked}
      tabIndex={0}
      onClick={handleContainerClick}
    >
      {Children}
    </div>
  )
}
export default React.memo(Radio)
