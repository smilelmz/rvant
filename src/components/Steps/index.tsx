import React from 'react'
import { StepsProps } from './index.types'
import { createNamespace } from '../utils'
import { StepsContext } from '../context'

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
    <StepsContext.Provider
      value={{
        active,
        iconPrefix,
        finishIcon,
        activeColor,
        inactiveIcon,
        inactiveColor,
        direction,
        activeIcon,
        clickStep
      }}
    >
      <div style={style} className={`${bem([direction])} ${className || ''}`}>
        <div className={bem('items')}>
          {React.Children.map(children, (child: any, index: number) => {
            return React.cloneElement(child, {
              index
            })
          })}
        </div>
      </div>
    </StepsContext.Provider>
  )
}
export default React.memo(Steps)
