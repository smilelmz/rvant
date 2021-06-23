import React from 'react'
import { DocPanel } from '@/doc'
import markdown from '../../markdown'
import md from './README.zh-CN.md'

const IndexBarDoc = () => {
  return <DocPanel html={markdown(md)} />
}

export default IndexBarDoc
