import React from 'react'
import { SidebarProps } from './types'
import { createNamespace } from '../utils'
import { SidebarContext } from '../context'

const [bem] = createNamespace('sidebar')
const Sidebar = (fieldProps: SidebarProps) => {
  const props: SidebarProps = {
    style: {},
    className: '',
    value: 0,
    ...fieldProps
  }
  const { style, className, children } = props

  const getActive = () => +props.value

  const setActive = (value: number) => {
    if (value !== getActive()) {
      props.change && props.change(value)
    }
  }

  return (
    <SidebarContext.Provider value={{ setActive, getActive }}>
      <div style={style} className={`${bem()} ${className || ''}`}>
        {React.Children.map(children, (child: any, index: number) => {
          return React.cloneElement(child, {
            index
          })
        })}
      </div>
    </SidebarContext.Provider>
  )
}
export default React.memo(Sidebar)
