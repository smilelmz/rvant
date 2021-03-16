import React from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import Icon from '@/components/Icon'
import Col from '@/components/Col'
import icons from '@/components/assets/icons/config'
import './index.scss'

const IconDemo = () => {
  return (
    <MobileLayout title='Icon' className='demo-icon'>
      <DemoBlock title='用法示例'>
        <Col span='6'>
          <Icon name='chat-o' />
        </Col>
        <Col span='6'>
          <Icon name='https://b.yzcdn.cn/vant/icon-demo-1126.png' />
        </Col>
      </DemoBlock>
      <DemoBlock title='徽标提示'>
        <Col span='6'>
          <Icon name='chat-o' dot />
        </Col>
        <Col span='6'>
          <Icon name='chat-o' badge='9' />
        </Col>
        <Col span='6'>
          <Icon name='chat-o' badge='99+' />
        </Col>
      </DemoBlock>
      <DemoBlock title='图标颜色'>
        <Col span='6'>
          <Icon name='chat-o' color='#1989fa' />
        </Col>
        <Col span='6'>
          <Icon name='chat-o' color='#07c160' />
        </Col>
      </DemoBlock>
      <DemoBlock title='图标大小'>
        <Col span='6'>
          <Icon name='chat-o' size='40' />
        </Col>
        <Col span='6'>
          <Icon name='chat-o' size='3rem' />
        </Col>
      </DemoBlock>
      <DemoBlock title='基础图标'>
        {icons.basic.map((icon) => {
          return (
            <Col span='6' key={icon}>
              <Icon name={icon} size='40' />
              <span>{icon}</span>
            </Col>
          )
        })}
      </DemoBlock>
      <DemoBlock title='线框风格'>
        {icons.outline.map((icon) => {
          return (
            <Col span='6' key={icon}>
              <Icon name={icon} size='40' />
              <span>{icon}</span>
            </Col>
          )
        })}
      </DemoBlock>
      <DemoBlock title='实底风格'>
        {icons.filled.map((icon) => {
          return (
            <Col span='6' key={icon}>
              <Icon name={icon} size='40' />
              <span>{icon}</span>
            </Col>
          )
        })}
      </DemoBlock>
    </MobileLayout>
  )
}

export default IconDemo
