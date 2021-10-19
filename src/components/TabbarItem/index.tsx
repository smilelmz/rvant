import React, { MouseEvent, useContext } from 'react'
import { TabbarItemProps } from './types'
import { createNamespace } from '../utils'
import { TabbarContext } from '../context'
import { Icon } from '..'
import Badge from '../Badge'

const [bem] = createNamespace('tabbar-item')
const TabbarItem = (fieldProps: TabbarItemProps) => {
  const props: TabbarItemProps = {
    style: {},
    className: '',
    ...fieldProps
  }
  const { style, className, dot, badge, children } = props
  const parent = useContext(TabbarContext)
  const active = (props.name || props.index) === parent.props.value
  const { activeColor, inactiveColor } = parent.props
  const color = active ? activeColor : inactiveColor

  const onClick = (event: MouseEvent) => {
    parent.setActive(props.name ?? props.index)
    props.click && props.click(event)
  }

  const renderIcon = () => {
    if (props.customIcon) {
      return props.customIcon(active)
    }
    if (props.icon) {
      return <Icon name={props.icon as string} classPrefix={props.iconPrefix} />
    }
  }

  return (
    <div
      style={{ color, ...style }}
      className={`${bem({ active })} ${className || ''}`}
      onClick={onClick}
    >
      <Badge dot={dot} content={badge} className={bem('icon')}>
        {renderIcon()}
      </Badge>
      <div className={bem('text')}>{children}</div>
    </div>
  )
}
export default React.memo(TabbarItem)
