import React, { useContext, useMemo, useRef } from 'react'
import { TabProps } from './types'
import { createNamespace } from '../utils'
import { TabContext, TabsContext } from '../context'
import { useWatch } from '../composables'

const [bem] = createNamespace('tab')
const Tab = (fieldProps: TabProps, ref: React.Ref<HTMLDivElement>) => {
  const props: TabProps = {
    style: {},
    className: '',
    index: 0,
    ...fieldProps
  }
  const { style, className, children } = props
  const inited = useRef(false)
  const parent = useContext(TabsContext)
  const getName = () => props.name ?? props.index
  const { animated, swipeable, scrollspy, lazyRender } = parent.props
  const init = () => {
    inited.current = true

    if (lazyRender) {
      parent.onRendered(getName(), props.title)
    }
  }

  const active = useMemo(() => {
    const isActive = getName() === parent.currentName

    if (isActive && !inited.current) {
      init()
    }

    return isActive
  }, [inited.current, parent.currentName])

  useWatch(props.title, () => {
    parent.setLine()
    parent.scrollIntoView()
  })

  if (!children && !animated) return <></>

  const show = scrollspy || active

  if (animated || swipeable) {
    return (
      <TabContext.Provider value={{ active }}>
        <div className={bem('pane')}>{children}</div>
      </TabContext.Provider>
    )
  }

  const shouldRender = inited.current || scrollspy || !lazyRender
  const Content = shouldRender ? children : null

  return (
    <TabContext.Provider value={{ active }}>
      <div
        role='tabpanel'
        style={{ ...style, display: !show ? 'none' : '' }}
        className={`${bem('pane')} ${className || ''}`}
        ref={ref}
      >
        {Content}
      </div>
    </TabContext.Provider>
  )
}
export default React.memo(React.forwardRef(Tab))
