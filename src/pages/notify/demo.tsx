import React, { useState } from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import Notify, { NotifyType, VanNotify } from '@/components/Notify'
import { Cell, Icon } from '@/components'

const NotifyDemo = () => {
  const [show, setShow] = useState(false)
  const showNotify = () => {
    Notify('通知内容')
  }
  const showType = (type: NotifyType) => {
    Notify({
      message: '通知内容',
      type
    })
  }

  const showCustomColor = () => {
    Notify({
      color: '#ad0000',
      message: '自定义颜色',
      background: '#ffe1e1'
    })
  }

  const showCustomDuration = () => {
    Notify({
      message: '自定义时长',
      duration: 1
    })
  }

  const showComponentCall = () => {
    setShow(true)
    setTimeout(() => {
      setShow(false)
    }, 2000)
  }

  return (
    <MobileLayout title='Notify' className='demo-notify'>
      <DemoBlock title='基本用法'>
        <Cell title='基本用法' isLink click={showNotify} />
      </DemoBlock>
      <DemoBlock title='通知类型'>
        <Cell title='主要通知' isLink click={() => showType('primary')} />
        <Cell title='成功通知' isLink click={() => showType('success')} />
        <Cell title='危险通知' isLink click={() => showType('danger')} />
        <Cell title='警告通知' isLink click={() => showType('warning')} />
      </DemoBlock>
      <DemoBlock title='自定义配置'>
        <Cell title='自定义颜色' isLink click={showCustomColor} />
        <Cell title='自定义时长' isLink click={showCustomDuration} />
      </DemoBlock>
      <DemoBlock title='组件调用'>
        <Cell title='组件调用' isLink click={showComponentCall} />

        <VanNotify show={show} type='success'>
          <Icon name='bell' style={{ marginRight: 4 }} />
          <span>通知内容</span>
        </VanNotify>
      </DemoBlock>
    </MobileLayout>
  )
}

export default NotifyDemo
