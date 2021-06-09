import React, { useRef } from 'react'
import { TabbarProps } from './index.types'
import {
  BORDER_TOP_BOTTOM,
  callInterceptor,
  createNamespace,
  getZIndexStyle
} from '../utils'
import { usePlaceholder } from '../composables'
import { TabbarContext } from '../context'

const [bem] = createNamespace('tabbar')
const Tabbar = (fieldProps: TabbarProps) => {
  const props: TabbarProps = {
    style: {},
    className: '',
    fixed: true,
    border: true,
    ...fieldProps
  }
  const { style, className, children } = props
  const root = useRef<HTMLDivElement>(null)
  const renderPlaceholder = usePlaceholder(root, bem)

  const isUnfit = () => !(props.safeAreaInsetBottom ?? props.fixed)

  const renderTabbar = () => {
    const { fixed, zIndex, border } = props
    return (
      <div
        ref={root}
        style={{ ...getZIndexStyle(zIndex), ...style }}
        className={`${bem({ unfit: isUnfit(), fixed })} ${
          border ? BORDER_TOP_BOTTOM : ''
        } ${className}`}
      >
        {React.Children.map(children, (child: any, index: number) => {
          return React.cloneElement(child, {
            index
          })
        })}
      </div>
    )
  }

  const setActive = (active: number | string) => {
    if (active !== props.value) {
      callInterceptor({
        interceptor: props.beforeChange,
        args: [active],
        done() {
          props.change && props.change(active)
        }
      })
    }
  }

  const renderContent = () => {
    if (props.fixed && props.placeholder) {
      return renderPlaceholder(renderTabbar)
    }
    return renderTabbar()
  }

  return (
    <TabbarContext.Provider value={{ props, setActive }}>
      {renderContent()}
    </TabbarContext.Provider>
  )
}
export default React.memo(Tabbar)
