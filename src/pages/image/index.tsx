import React from 'react'
import { DocPanel } from '@/doc'
import markdown from '../../markdown'
import md from './README.zh-CN.md'

const ImageDoc = () => {
  return <DocPanel html={markdown(md)} />
}

export default ImageDoc
  