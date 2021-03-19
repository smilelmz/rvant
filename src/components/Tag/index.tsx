import React from 'react'
import { TagProps } from './index.types'
import { createNamespace } from '../utils'

const [bem] = createNamespace('tag')
const Tag: React.FC<TagProps> = ({}) => {
  const className = bem('tag')
  return <div className={className}>123456</div>
}
export default Tag
