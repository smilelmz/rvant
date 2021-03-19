import React from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import Tag from '@/components/Tag'
import './index.scss'

const TagDemo = () => {
  return (
    <MobileLayout title='Tag' className='demo-tag'>
      <DemoBlock title='demo1'>
        <Tag />
      </DemoBlock>
    </MobileLayout>
  )
}

export default TagDemo
