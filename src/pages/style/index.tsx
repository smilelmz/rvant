import React from 'react'
import { DocPanel } from '@/doc'
import markdown from '../../markdown'
import md from './README.zh-CN.md'
// import en_md from './README.md'

const StyleDoc = () => {
  return <DocPanel html={markdown(md)} />
}

export default StyleDoc
  