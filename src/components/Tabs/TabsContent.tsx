import React from 'react'
import { TabsContentProps } from './index.types'
import { createNamespace } from '../utils'

const [bem] = createNamespace('tabs')
const Tabs = (props: TabsContentProps) => {
  const { children } = props
  // const onChange = (index: number) => props.change && props.change(index)
  const renderChildren = () => {
    // if (props.animated || props.swipeable) {
    //   return (
    //     <Swipe
    //       ref={swipeRef}
    //       loop={false}
    //       className={bem('track')}
    //       duration={+props.duration * 1000}
    //       touchable={props.swipeable}
    //       showIndicators={false}
    //       onChange={onChange}
    //     >
    //       {children}
    //     </Swipe>
    //   );
    // }
    return children
  }
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
