import React from 'react'
import { StepProps } from './index.types'
import { BORDER, createNamespace, isElement } from '../utils'
import Icon from '../Icon'

const [bem] = createNamespace('step')
const Step = ({
  style = {},
  className,
  parent = {},
  index = 0,
  children
}: StepProps) => {
  if (!parent) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('[Vant] <Step> must be a child component of <Steps>.')
    }
    return <></>
  }

  const getStatus = () => {
    const active = +(parent.active || 0)
    if (index < active) {
      return 'finish'
    }
    return index === active ? 'process' : 'waiting'
  }

  const isActive = () => getStatus() === 'process'

  const lineStyle = () => {
    return {
      background:
        getStatus() === 'finish' ? parent.activeColor : parent.inactiveColor
    }
  }

  const titleStyle = () => {
    if (isActive()) {
      return { color: parent.activeColor }
    }
    if (!getStatus()) {
      return { color: parent.inactiveColor }
    }
  }

  const onClickStep = () => parent.clickStep && parent.clickStep(index)

  const renderCircle = () => {
    const {
      iconPrefix,
      finishIcon,
      activeIcon,
      activeColor,
      inactiveIcon
    } = parent

    if (isActive() && activeIcon) {
      if (isElement(activeIcon)) {
        return activeIcon
      }
      return (
        <Icon
          className={bem('icon', 'active')}
          name={activeIcon as string}
          color={activeColor}
          classPrefix={iconPrefix}
        />
      )
    }

    if (getStatus() === 'finish' && finishIcon) {
      if (isElement(finishIcon)) {
        return finishIcon
      }
      return (
        <Icon
          className={bem('icon', 'finish')}
          name={finishIcon as string}
          color={activeColor}
          classPrefix={iconPrefix}
        />
      )
    }

    if (inactiveIcon) {
      if (isElement(inactiveIcon)) {
        return inactiveIcon
      }
      return (
        <Icon
          className={bem('icon')}
          name={inactiveIcon as string}
          classPrefix={iconPrefix}
        />
      )
    }

    return <i className={bem('circle')} style={lineStyle()} />
  }

  const status = getStatus()
  return (
    <div
      style={style}
      className={`${BORDER} ${bem([
        parent.direction,
        { [status]: status }
      ])} ${className || ''}`}
    >
      <div
        className={bem('title', { active: isActive() })}
        style={titleStyle()}
        onClick={onClickStep}
      >
        {children}
      </div>
      <div className={bem('circle-container')} onClick={onClickStep}>
        {renderCircle()}
      </div>
      <div className={bem('line')} style={lineStyle()} />
    </div>
  )
}
export default Step
