import React from 'react'
import { DocPanel } from '@/doc'
import markdown from '../../markdown'
import md from './README.zh-CN.md'

const CascaderDoc = () => {
  return <DocPanel html={markdown(md)} />
}

export default CascaderDoc
