import React, { MouseEvent, useContext } from 'react'
import { SidebarItemProps } from './index.types'
import { createNamespace } from '../utils'
import { SidebarContext } from '../context'
import Badge from '../Badge'

const [bem] = createNamespace('sidebar-item')
const SidebarItem = (fieldProps: SidebarItemProps) => {
  const props: SidebarItemProps = {
    style: {},
    className: '',
    index: 0,
    ...fieldProps
  }
  const { style, className, dot, badge, title, disabled } = props
  const parent = useContext(SidebarContext)
  const selected = props.index === parent.getActive()

  const onClick = (event: MouseEvent) => {
    if (props.disabled) return

    props.click && props.click(event)
    parent.setActive(props.index)
  }

  return (
    <div
      style={style}
      className={`${bem({ select: selected, disabled })} ${className || ''}`}
      onClick={onClick}
    >
      <Badge dot={dot} content={badge} className={bem('text')}>
        {title}
      </Badge>
    </div>
  )
}
export default React.memo(SidebarItem)
