import React, { useState } from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import Overlay from '@/components/Overlay'
import Button from '../../components/Button'
import './index.scss'

const OverlayDemo = () => {
  const [show, setShow] = useState(false)

  return (
    <MobileLayout title='Overlay' className='demo-overlay'>
      <DemoBlock title='基础用法'>
        <Button
          type='primary'
          click={() => setShow(true)}
          style={{ marginLeft: 16 }}
        >
          显示遮罩层
        </Button>
        <Overlay show={show} click={() => setShow(false)} />
      </DemoBlock>
      <DemoBlock title='嵌入内容'>
        <Button
          type='primary'
          click={() => setShow(true)}
          style={{ marginLeft: 16 }}
        >
          显示遮罩层
        </Button>
        <Overlay show={show} click={() => setShow(false)}>
          <div className='wrapper'>
            <div className='block' />
          </div>
        </Overlay>
      </DemoBlock>
    </MobileLayout>
  )
}

export default OverlayDemo
