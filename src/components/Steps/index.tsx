import React from 'react'
import { StepsProps } from './index.types'
import { createNamespace } from '../utils'

const [bem] = createNamespace('steps')
const Steps = ({
  style = {},
  className,
  children,
  active = 0,
  iconPrefix,
  finishIcon,
  activeColor,
  inactiveIcon,
  inactiveColor,
  direction = 'horizontal',
  activeIcon = 'checked',
  clickStep
}: StepsProps) => {
  return (
    <div style={style} className={`${bem([direction])} ${className || ''}`}>
      <div className={bem('items')}>
        {React.Children.map(children, (child: any, index: number) => {
          const config: Record<string, any> = {
            active,
            iconPrefix,
            finishIcon,
            activeColor,
            inactiveIcon,
            inactiveColor,
            direction,
            activeIcon,
            clickStep
          }
          return React.cloneElement(child, {
            parent: config,
            index
          })
        })}
      </div>
    </div>
  )
}
export default Steps
