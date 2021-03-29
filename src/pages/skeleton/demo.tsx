import React, { useState } from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import Skeleton from '@/components/Skeleton'
import Switch from '@/components/Switch'
import './index.scss'

const SkeletonDemo = () => {
  const [show, setShow] = useState(false)
  return (
    <MobileLayout title='Skeleton' className='demo-skeleton'>
      <DemoBlock title='基础用法'>
        <Skeleton title row='3' />
      </DemoBlock>
      <DemoBlock title='基础用法'>
        <Skeleton avatar title row='3' />
      </DemoBlock>
      <DemoBlock title='基础用法'>
        <Switch
          value={show}
          size='24px'
          change={(v) => setShow(v as boolean)}
        />
        <Skeleton title avatar row='3' loading={!show}>
          <div className='demo-preview'>
            <img src='https://img.yzcdn.cn/vant/logo.png' />
            <div className='demo-content'>
              <h3>关于 Vant</h3>
              <p>
                'Vant 是一套轻量、可靠的移动端 Vue
                组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。'
              </p>
            </div>
          </div>
        </Skeleton>
      </DemoBlock>
    </MobileLayout>
  )
}

export default SkeletonDemo
