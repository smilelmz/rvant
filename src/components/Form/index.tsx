import React from 'react'
import { FormProps } from './index.types'
import { createNamespace } from '../utils'

const [bem] = createNamespace('form')
const Form = ({ style = {}, className }: FormProps) => {
  return (
    <div style={style} className={`${bem()} ${className || ''}`}>
      123456
    </div>
  )
}
export default Form
