import React from 'react'
import { BASE_PREFIX } from '../utils/constant'
import { RadioGroupProps } from './index.types'
import classnames from '../utils/classNames'

const baseClass = `${BASE_PREFIX}radio-group`
const RadioGroup: React.FC<RadioGroupProps> = ({
  value,
  className,
  disabled = false,
  direction = 'vertical',
  checkedColor,
  iconSize = 20,
  change,
  children = []
}) => {
  const groupClassName = classnames(baseClass, [{ [direction]: true }])
  return (
    <div className={`${groupClassName} ${className}`} role='radiogroup'>
      {React.Children.map(children, (child: any) => {
        const config: Record<string, any> = {
          value,
          direction,
          disabled,
          iconSize,
          change
        }
        if (checkedColor) config.checkedColor = checkedColor
        return React.cloneElement(child, config)
      })}
    </div>
  )
}
export default RadioGroup
