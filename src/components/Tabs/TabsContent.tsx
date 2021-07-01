import React, { useEffect, useRef } from 'react'
import { TabsContentProps } from './index.types'
import { createNamespace } from '../utils'
import { SwipeHandler } from '../Swipe/index.types'
import Swipe from '../Swipe'
import { useWatch } from '../composables'

const [bem] = createNamespace('tabs')
const Tabs = (props: TabsContentProps) => {
  const { children } = props

  const swipeRef = useRef<SwipeHandler>()

  const onChange = (index: number) => {
    props.change && props.change(index)
  }
  const renderChildren = () => {
    if (props.animated || props.swipeable) {
      return (
        <Swipe
          ref={swipeRef}
          loop={false}
          className={bem('track')}
          duration={+props.duration * 1000}
          touchable={props.swipeable}
          showIndicators={false}
          change={onChange}
        >
          {children}
        </Swipe>
      )
    }
    return children
  }

  const swipeToCurrentTab = (index: number) => {
    const swipe = swipeRef.current
    if (index >= 0 && swipe && swipe.state.active !== index) {
      swipe.swipeTo(index, { immediate: !props.inited })
    }
  }

  useWatch(props.currentIndex, swipeToCurrentTab)

  useEffect(() => {
    swipeToCurrentTab(props.currentIndex)
  }, [])
  return (
    <div
      className={bem('content', {
        animated: props.animated || props.swipeable
      })}
    >
      {renderChildren()}
    </div>
  )
}
export default React.memo(Tabs)
