import React from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import Button from '@/components/Button'
import './index.scss'

const ButtonDemo = () => {
  return (
    <MobileLayout title='Button' className='demo-button'>
      <DemoBlock title='按钮类型'>
        <div className='demo-button-row'>
          <Button type='primary'>主要按钮</Button>
          <Button type='success'>成功按钮</Button>
          <Button type='default'>默认按钮</Button>
        </div>
        <Button type='danger'>危险按钮</Button>
        <Button type='warning'>警告按钮</Button>
      </DemoBlock>
      <DemoBlock title='朴素类型'>
        <Button plain type='primary'>
          朴素按钮
        </Button>
        <Button plain type='success'>
          朴素按钮
        </Button>
      </DemoBlock>
      <DemoBlock title='细边框'>
        <Button plain hairline type='primary'>
          细边框按钮
        </Button>
        <Button plain hairline type='success'>
          细边框按钮
        </Button>
      </DemoBlock>
      <DemoBlock title='禁用状态'>
        <Button disabled type='primary'>
          禁用状态
        </Button>
        <Button disabled type='success'>
          禁用状态
        </Button>
      </DemoBlock>
      <DemoBlock title='加载状态'>
        <Button loading type='primary' />
        <Button loading loadingType='spinner' type='primary' />
        <Button loading loadingText='加载中' type='success' />
      </DemoBlock>
      <DemoBlock title='按钮形状'>
        <Button square type='primary'>
          方形按钮
        </Button>
        <Button round type='success'>
          圆形按钮
        </Button>
      </DemoBlock>
      <DemoBlock title='图标按钮'>
        <Button icon='plus' type='primary' />
        <Button icon='plus' type='primary'>
          按钮
        </Button>
        <Button
          icon='https://img.yzcdn.cn/vant/user-active.png'
          type='primary'
          plain
        >
          按钮
        </Button>
      </DemoBlock>
      <DemoBlock title='按钮尺寸'>
        <Button type='primary' size='large'>
          大号按钮
        </Button>
        <Button type='primary' size='normal'>
          普通按钮
        </Button>
        <Button type='primary' size='small'>
          小型按钮
        </Button>
        <Button type='primary' size='mini'>
          迷你按钮
        </Button>
      </DemoBlock>
      <DemoBlock title='块级元素'>
        <Button type='primary' block>
          块级元素
        </Button>
      </DemoBlock>
      <DemoBlock title='按钮尺寸'>
        <Button tag='a' type='primary' url='https://www.baidu.com'>
          新标签页打开
        </Button>
        <Button tag='a' type='primary' url='https://www.baidu.com' replace>
          当前页打开
        </Button>
      </DemoBlock>
      <DemoBlock title='自定义样式'>
        <Button color='#7232dd'>单色按钮</Button>
        <Button color='#7232dd' plain fontColor='#7232dd'>
          单色按钮
        </Button>
        <Button color='linear-gradient(to right, #ff6034, #ee0a24)'>
          渐变色按钮
        </Button>
      </DemoBlock>
    </MobileLayout>
  )
}

export default ButtonDemo
