import React from 'react'
import { TabsProps } from './index.types'
import { createNamespace } from '../utils'

const [bem] = createNamespace('tabs')
const Tabs = (fieldProps: TabsProps) => {
  const props: TabsProps = {
    style: {},
    className: '',
    ...fieldProps
  }
  const { style, className } = props
  return (
    <div style={style} className={`${bem()} ${className || ''}`}>
      123456
    </div>
  )
}
export default React.memo(Tabs)
