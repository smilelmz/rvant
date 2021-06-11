import React from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import Tab from '@/components/Tab'
import './index.scss'

const TabDemo = () => {
  return (
    <MobileLayout title='Tab' className='demo-tab'>
      <DemoBlock title='基本用法'>
        <Tab />
      </DemoBlock>
    </MobileLayout>
  )
}

export default TabDemo
