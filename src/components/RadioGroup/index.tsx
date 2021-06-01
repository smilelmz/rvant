import React from 'react'
import { createNamespace } from '../utils'
import { RadioGroupProps } from './index.types'

const [bem] = createNamespace('radio-group')
const RadioGroup: React.FC<RadioGroupProps> = ({
  value,
  className,
  disabled = false,
  direction = 'vertical',
  checkedColor,
  iconSize = 20,
  change,
  children = []
}: RadioGroupProps) => {
  return (
    <div className={`${bem([direction])} ${className}`} role='radiogroup'>
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
export default React.memo(RadioGroup)
