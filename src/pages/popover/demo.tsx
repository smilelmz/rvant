import React from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import Popover from '@/components/Popover'
import './index.scss'

const PopoverDemo = () => {
  return (
    <MobileLayout title='Popover' className='demo-popover'>
      <DemoBlock title='基本用法'>
        <Popover />
      </DemoBlock>
    </MobileLayout>
  )
}

export default PopoverDemo
