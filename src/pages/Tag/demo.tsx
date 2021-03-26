import React from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import Cell from '@/components/Cell'
import Tag from '@/components/Tag'
import './index.scss'

const TagDemo = () => {
  return (
    <MobileLayout title='Tag' className='demo-tag'>
      <DemoBlock title='基础用法'>
        <Cell title='类型' value={<Tag />} />
      </DemoBlock>
    </MobileLayout>
  )
}

export default TagDemo
