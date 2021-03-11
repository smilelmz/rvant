import React from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import Badge from '@/components/Badge'
import Icon from '@/components/Icon'
import './index.scss'

const BadgeDemo = () => {
  return (
    <MobileLayout title='Badge' className='demo-badge'>
      <DemoBlock title='基础用法'>
        <Badge content='5'>
          <div className='child' />
        </Badge>
        <Badge content='10'>
          <div className='child' />
        </Badge>
        <Badge content='Hot'>
          <div className='child' />
        </Badge>
        <Badge dot>
          <div className='child' />
        </Badge>
      </DemoBlock>
      <DemoBlock title='最大值'>
        <Badge content='20' max='9'>
          <div className='child' />
        </Badge>
        <Badge content='50' max='20'>
          <div className='child' />
        </Badge>
        <Badge content='200' max='99'>
          <div className='child' />
        </Badge>
      </DemoBlock>
      <DemoBlock title='自定义颜色'>
        <Badge content='5' color='#1989fa'>
          <div className='child' />
        </Badge>
        <Badge content='10' color='#1989fa'>
          <div className='child' />
        </Badge>
        <Badge dot color='#1989fa'>
          <div className='child' />
        </Badge>
      </DemoBlock>
      <DemoBlock title='自定义徽标内容'>
        <Badge content={<Icon name='success' className='badge-icon' />}>
          <div className='child' />
        </Badge>
        <Badge content={<Icon name='cross' className='badge-icon' />}>
          <div className='child' />
        </Badge>
        <Badge content={<Icon name='down' className='badge-icon' />}>
          <div className='child' />
        </Badge>
      </DemoBlock>
      <DemoBlock title='独立展示'>
        <Badge content='20' style={{ marginLeft: 16 }} />
        <Badge content='200' max='99' style={{ marginLeft: 16 }} />
      </DemoBlock>
    </MobileLayout>
  )
}

export default BadgeDemo
