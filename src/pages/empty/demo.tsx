import React from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import Empty from '@/components/Empty'
import Button from '@/components/Button'
import './index.scss'

const EmptyDemo = () => {
  return (
    <MobileLayout title='Empty' className='demo-empty'>
      <DemoBlock title='基本用法'>
        <Empty description={'描述文字'} />
      </DemoBlock>
      <DemoBlock title='图片类型'>
        <Empty image='error' description={'描述文字'} />
        <Empty image='network' description={'描述文字'} />
        <Empty image='search' description={'描述文字'} />
      </DemoBlock>
      <DemoBlock title='自定义图片'>
        <Empty
          className='custom-image'
          image='https://img.yzcdn.cn/vant/custom-empty-image.png'
          description={'描述文字'}
        />
      </DemoBlock>
      <DemoBlock title='底部内容'>
        <Empty description={'描述文字'}>
          <Button round type='danger' className='bottom-button'>
            按钮
          </Button>
        </Empty>
      </DemoBlock>
    </MobileLayout>
  )
}

export default EmptyDemo
