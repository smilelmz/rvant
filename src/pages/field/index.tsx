import React from 'react'
import { DocPanel } from '@/doc'
import markdown from '../../markdown'
import md from './README.zh-CN.md'

const FieldDoc = () => {
  return <DocPanel html={markdown(md)} />
}

export default FieldDoc
