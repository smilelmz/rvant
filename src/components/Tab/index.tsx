import React from 'react'
import { TabProps } from './index.types'
import { createNamespace } from '../utils'

const [bem] = createNamespace('tab')
const Tab = (fieldProps: TabProps) => {
  const props: TabProps = {
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
export default React.memo(Tab)
