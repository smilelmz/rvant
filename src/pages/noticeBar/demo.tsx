import React from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import NoticeBar from '@/components/NoticeBar'
import './index.scss'

const NoticeBarDemo = () => {
  return (
    <MobileLayout title='NoticeBar' className='demo-notice-bar'>
      <DemoBlock title='基本用法'>
        <NoticeBar
          text='在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。'
          scrollable
          leftIcon='volume-o'
        />
      </DemoBlock>
      <DemoBlock title='滚动播放'>
        <NoticeBar text='技术是开发它的人的共同灵魂。' scrollable />
        <NoticeBar
          text='在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。'
          scrollable={false}
        />
      </DemoBlock>
      <DemoBlock title='多行展示'>
        <NoticeBar
          text='在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。'
          wrapable
          scrollable={false}
        />
      </DemoBlock>
      <DemoBlock title='通知栏模式'>
        <NoticeBar mode='closeable' text='技术是开发它的人的共同灵魂。' />
        <NoticeBar mode='link' text='技术是开发它的人的共同灵魂。' />
      </DemoBlock>
      <DemoBlock title='自定义样式'>
        <NoticeBar
          text='技术是开发它的人的共同灵魂。'
          color='#1989fa'
          background='#ecf9ff'
          leftIcon='info-o'
        />
      </DemoBlock>
    </MobileLayout>
  )
}

export default NoticeBarDemo
