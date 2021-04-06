import React from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import Divider from '@/components/Divider'
import './index.scss'

const DividerDemo = () => {
  return (
    <MobileLayout title='Divider' className='demo-divider'>
      <DemoBlock title='基本用法'>
        <Divider />
      </DemoBlock>
      <DemoBlock title='展示文本'>
        <Divider>文本</Divider>
      </DemoBlock>
      <DemoBlock title='内容位置'>
        <Divider contentPosition='left'>文本</Divider>
        <Divider contentPosition='right'>文本</Divider>
      </DemoBlock>
      <DemoBlock title='虚线'>
        <Divider dashed hairline={false}>
          文本
        </Divider>
      </DemoBlock>
      <DemoBlock title='自定义样式'>
        <Divider
          style={{
            borderColor: '#1989fa',
            color: '#1989fa',
            padding: '0 16px'
          }}
        >
          文本
        </Divider>
      </DemoBlock>
    </MobileLayout>
  )
}

export default DividerDemo
