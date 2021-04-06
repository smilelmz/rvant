import React from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import Progress from '@/components/Progress'
import './index.scss'

const ProgressDemo = () => {
  return (
    <MobileLayout title='Progress' className='demo-progress'>
      <DemoBlock title='基本用法'>
        <Progress percentage={50} />
      </DemoBlock>
      <DemoBlock title='线条粗细'>
        <Progress percentage={50} strokeWidth={8} />
      </DemoBlock>
      <DemoBlock title='置灰'>
        <Progress percentage={50} inactive />
      </DemoBlock>
      <DemoBlock title='样式定制'>
        <Progress color='#f2826a' percentage='25' pivotText='橙色' />
        <Progress color='#ee0a24' percentage='50' pivotText='红色' />
        <Progress
          percentage='75'
          pivotText='紫色'
          pivotColor='#7232dd'
          color='linear-gradient(to right, #be99ff, #7232dd)'
        />
      </DemoBlock>
    </MobileLayout>
  )
}

export default ProgressDemo
