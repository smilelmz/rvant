import React from 'react'
import { TreeSelectChild, TreeSelectProps } from './index.types'
import { addUnit, createNamespace } from '../utils'
import Icon from '../Icon'
import SidebarItem from '../SidebarItem'
import Sidebar from '../Sidebar'

const [bem] = createNamespace('tree-select')
const TreeSelect = (fieldProps: TreeSelectProps) => {
  const props: TreeSelectProps = {
    style: {},
    className: '',
    max: Infinity,
    items: [],
    height: 300,
    activeId: 0,
    selectedIcon: 'success',
    mainActiveIndex: 0,
    ...fieldProps
  }
  const { style, className } = props
  const isActiveItem = (id: number | string) => {
    return Array.isArray(props.activeId)
      ? props.activeId.includes(id)
      : props.activeId === id
  }
  const renderSubItem = (item: TreeSelectChild) => {
    const onClick = () => {
      if (item.disabled) return
      let activeId
      if (Array.isArray(props.activeId)) {
        activeId = props.activeId.slice()

        const index = activeId.indexOf(item.id)

        if (index !== -1) {
          activeId.splice(index, 1)
        } else if (activeId.length < props.max) {
          activeId.push(item.id)
        }
      } else {
        activeId = item.id
      }

      props.updateActiveId && props.updateActiveId(activeId)
      props.clickItem && props.clickItem(item)
    }

    return (
      <div
        key={item.id}
        className={`van-ellipsis ${bem('item', {
          active: isActiveItem(item.id),
          disabled: item.disabled
        })}`}
        onClick={onClick}
      >
        {item.text}
        {isActiveItem(item.id) && (
          <Icon name={props.selectedIcon} className={bem('selected')} />
        )}
      </div>
    )
  }

  const onSidebarChange = (index: number) => {
    props.updateMainActiveIndex && props.updateMainActiveIndex(index)
    props.clickNav && props.clickNav(index)
  }

  const renderSidebar = () => {
    const Items = props.items.map((item, index) => (
      <SidebarItem
        key={index}
        dot={item.dot}
        title={item.text}
        badge={item.badge}
        className={`${bem('nav-item')} ${item.className}`}
        disabled={item.disabled}
      />
    ))

    return (
      <Sidebar
        className={bem('nav')}
        value={props.mainActiveIndex}
        change={onSidebarChange}
      >
        {Items}
      </Sidebar>
    )
  }

  const renderContent = () => {
    if (React.isValidElement(props.content)) {
      return props.content
    }

    const selected = props.items[+props.mainActiveIndex] || { children: [] }
    if (selected.children) {
      return selected.children.map(renderSubItem)
    }
  }
  return (
    <div
      style={{ height: addUnit(props.height), ...style }}
      className={`${bem()} ${className || ''}`}
    >
      {renderSidebar()}
      <div className={bem('content')}>{renderContent()}</div>
    </div>
  )
}
export default React.memo(TreeSelect)
