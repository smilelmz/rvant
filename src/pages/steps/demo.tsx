import React, { useState } from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import Steps from '@/components/Steps'
import Step from '@/components/Step'
import Button from '@/components/Button'
import './index.scss'

const StepsDemo = () => {
  const [active, setActive] = useState(1)
  const nextStep = () => {
    setActive((active + 1) % 4)
  }
  return (
    <MobileLayout title='Steps' className='demo-steps'>
      <DemoBlock title='基本用法'>
        <Steps active={active}>
          <Step>买家下单</Step>
          <Step>商家接单</Step>
          <Step>买家提货</Step>
          <Step>交易完成</Step>
        </Steps>
        <Button click={nextStep}>下一步</Button>
      </DemoBlock>
      <DemoBlock title='自定义样式'>
        <Steps
          active={active}
          activeIcon='success'
          inactiveIcon='arrow'
          activeColor='#38f'
        >
          <Step>买家下单</Step>
          <Step>商家接单</Step>
          <Step>买家提货</Step>
          <Step>交易完成</Step>
        </Steps>
      </DemoBlock>
      <DemoBlock title='竖向步骤条'>
        <Steps active={0} direction='vertical'>
          <Step>
            <h3>【城市】物流状态2</h3>
            <p>2016-07-12 12:40</p>
          </Step>
          <Step>
            <h3>【城市】物流状态1</h3>
            <p>2016-07-11 10:00</p>
          </Step>
          <Step>
            <h3>快件已发货</h3>
            <p>2016-07-10 09:30</p>
          </Step>
        </Steps>
      </DemoBlock>
    </MobileLayout>
  )
}

export default StepsDemo
