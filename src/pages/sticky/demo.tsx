import React, { useState } from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import Sticky from '@/components/Sticky'
import Button from '@/components/Button'
import './index.scss'

const StickyDemo = () => {
  const [container, setContainer] = useState<HTMLElement | null>(null)

  const renderEle = (ele: any) => {
    if (ele) {
      setContainer(ele)
    }
  }
  return (
    <MobileLayout title='Sticky' className='demo-sticky'>
      <DemoBlock title='基础用法'>
        <Sticky>
          <Button type='primary' style={{ marginLeft: 15 }}>
            基础用法
          </Button>
        </Sticky>
      </DemoBlock>
      <DemoBlock title='吸顶距离'>
        <Sticky offsetTop='50'>
          <Button type='info' style={{ marginLeft: 115 }}>
            吸顶距离
          </Button>
        </Sticky>
      </DemoBlock>
      <DemoBlock title='指定容器'>
        <div style={{ height: 150, background: '#fff' }} ref={e => renderEle(e)}>
          <Sticky container={container}>
            <Button type='info' style={{ marginLeft: 215 }}>
              吸顶距离
            </Button>
          </Sticky>
        </div>
      </DemoBlock>
    </MobileLayout>
  )
}

export default StickyDemo
