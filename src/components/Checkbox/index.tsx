import React, {
  useState,
  useRef,
  useImperativeHandle,
  MouseEvent,
  useContext
} from 'react'
import { createNamespace, addUnit } from '../utils'
import { CheckboxProps, CheckboxHandler } from './index.types'
import Icon from '../Icon'
import { CheckboxGroupContext } from '../context'

const [bem] = createNamespace('checkbox')
const Checkbox = (
  {
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
    bindGroup = true,
    children
  }: CheckboxProps,
  ref: React.Ref<CheckboxHandler>
) => {
  const parent = useContext(CheckboxGroupContext)
  const { modelValue = [], max, updateGroupValue } = parent

  const iconRef = useRef<HTMLDivElement>(null)
  const [isChecked, setIsChecked] = useState(
    bindGroup ? modelValue.indexOf(name) !== -1 : checked
  )
  const checkedStatus =
    bindGroup && JSON.stringify(parent) !== '{}'
      ? modelValue.indexOf(name) !== -1
      : isChecked
  const getDisabled = () => {
    return parent.disabled || disabled
  }
  const setGroupValue = (checked: boolean) => {
    if (!bindGroup) return
    const value = modelValue ? modelValue.slice() : []
    if (checked) {
      const overlimit = max && value.length >= max
      if (!overlimit && !value.includes(name)) {
        value.push(name)
        if (bindGroup) {
          updateGroupValue && updateGroupValue(value)
        }
      }
    } else {
      const index = value.indexOf(name)

      if (index !== -1) {
        value.splice(index, 1)

        if (bindGroup) {
          updateGroupValue && updateGroupValue(value)
        }
      }
    }
  }
  const handleContainerClick = (event: MouseEvent) => {
    const { target } = event
    const icon = iconRef.current
    const iconClicked = icon === target || icon!.contains(target as Node)
    if (!getDisabled() && (iconClicked || !labelDisabled)) {
      setGroupValue(!isChecked)
      change && change(!isChecked)
      setIsChecked(!isChecked)
    }
    click && click(event)
  }
  const renderIcon = () => {
    const iconStyle: Record<string, any> = {}
    if (checkedColor && checkedStatus && !getDisabled()) {
      iconStyle.borderColor = checkedColor || parent.checkedColor
      iconStyle.backgroundColor = checkedColor || parent.checkedColor
    }
    return (
      <div
        ref={iconRef}
        key='icon'
        className={bem(`icon`, [
          { [shape]: true },
          { disabled: getDisabled() },
          { checked: checkedStatus }
        ])}
        style={{ fontSize: addUnit(iconSize || parent.iconSize) }}
      >
        {icon || <Icon name='success' style={iconStyle} />}
      </div>
    )
  }
  const renderLabel = () => {
    if (labelText || children) {
      return (
        <label
          key='label'
          htmlFor={name}
          className={bem(`label`, [
            { [labelPosition]: true },
            { disabled: getDisabled() }
          ])}
        >
          {labelText || children}
        </label>
      )
    }
  }
  const nodes: any[] = [renderIcon()]
  if (labelPosition === 'left') {
    nodes.unshift(renderLabel())
  } else {
    nodes.push(renderLabel())
  }
  const toggle = (newValue = !isChecked) => {
    if (JSON.stringify(parent) !== '{}' && bindGroup) {
      setGroupValue(newValue)
    } else {
      change && change(newValue)
    }
    setIsChecked(newValue)
  }
  useImperativeHandle(ref, () => ({
    bindGroup,
    name,
    checked: checkedStatus,
    toggle,
    disabled: getDisabled() || false
  }))
  return (
    <div
      role='checkbox'
      className={bem([
        { disabled: getDisabled() },
        { 'label-disabled': labelDisabled },
        parent.direction
      ])}
      aria-checked={checkedStatus}
      tabIndex={0}
      onClick={handleContainerClick}
    >
      {nodes}
    </div>
  )
}
export default React.memo(React.forwardRef(Checkbox))
