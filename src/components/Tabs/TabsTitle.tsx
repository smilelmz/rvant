import React, { CSSProperties, useMemo } from 'react'
import Badge from '../Badge'
import { createNamespace, isDef } from '../utils'
import { TabsTitleProps } from './types'

const [bem] = createNamespace('tab')
const Tab = (props: TabsTitleProps, ref: React.Ref<HTMLDivElement>) => {
  const { style = {}, className = '' } = props
  const titleStyle = useMemo(() => {
    const style: CSSProperties = {}
    const {
      type,
      color,
      disabled,
      isActive,
      activeColor,
      inactiveColor
    } = props

    const isCard = type === 'card'

    // card theme color
    if (color && isCard) {
      style.borderColor = color

      if (!disabled) {
        if (isActive) {
          style.backgroundColor = color
        } else {
          style.color = color
        }
      }
    }

    const titleColor = isActive ? activeColor : inactiveColor
    if (titleColor) {
      style.color = titleColor
    }

    return style
  }, [
    props.type,
    props.color,
    props.disabled,
    props.isActive,
    props.activeColor,
    props.inactiveColor
  ])

  const renderText = () => {
    const Text = (
      <span className={bem('text', { ellipsis: !props.scrollable })}>
        {props.customTitle ? props.customTitle : props.title}
      </span>
    )

    if (props.dot || (isDef(props.badge) && props.badge !== '')) {
      return (
        <Badge dot={props.dot} content={props.badge}>
          {Text}
        </Badge>
      )
    }

    return Text
  }

  return (
    <div
      role='tab'
      className={`${bem({
        active: props.isActive,
        disabled: props.disabled
      })} ${className}`}
      style={{ ...style, ...titleStyle }}
      aria-selected={props.isActive}
      ref={ref}
      onClick={() => props.click && props.click()}
    >
      {renderText()}
    </div>
  )
}
export default React.memo(React.forwardRef(Tab))
