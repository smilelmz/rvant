import React, { useContext, useMemo } from 'react'
import { TabProps } from './index.types'
import { createNamespace } from '../utils'
import { TabsContext } from '../context'
import { useWatch } from '../composables'
import SwipeItem from '../SwipeItem'
import { SwipeItemHandler } from '../SwipeItem/index.types'

const [bem] = createNamespace('tab')
const AnimateTab = (fieldProps: TabProps, ref: React.Ref<SwipeItemHandler>) => {
  const props: TabProps = {
    style: {},
    className: '',
    index: 0,
    ...fieldProps
  }
  const { style, className, children } = props
  const parent = useContext(TabsContext)
  const getName = () => props.name ?? props.index

  const active = useMemo(() => {
    const isActive = getName() === parent.currentName
    return isActive
  }, [parent.currentName])

  useWatch(props.title, () => {
    parent.setLine()
    parent.scrollIntoView()
  })

  return (
    <SwipeItem
      ref={ref}
      aria-hidden={!active}
      style={style}
      className={`${bem('pane-wrapper', { inactive: !active })} ${className}`}
    >
      {children}
    </SwipeItem>
  )
}
export default React.memo(React.forwardRef(AnimateTab))
