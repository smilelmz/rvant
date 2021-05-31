import React, { useCallback, useState } from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import Circle from '@/components/Circle'
import Button from '@/components/Button'
import './index.scss'

const CircleDemo = () => {
  const [rate, setRate] = useState(70)
  const [currentRate1, setCurrentDate1] = useState(70)
  const [currentRate2, setCurrentDate2] = useState(70)
  const [currentRate3, setCurrentDate3] = useState(70)
  const [currentRate4, setCurrentDate4] = useState(70)
  const format = (rate: number) => Math.min(Math.max(rate, 0), 100)
  const gradientColor = {
    '0%': '#3fecff',
    '100%': '#6149f6'
  }
  const add = () => {
    setRate(format(rate + 20))
  }

  const reduce = () => {
    setRate(format(rate - 20))
  }
  return (
    <MobileLayout title='Circle' className='demo-circle'>
      <DemoBlock title='基础用法'>
        <Circle
          currentRate={currentRate1}
          rate={rate}
          speed={100}
          text={`${currentRate1.toFixed(0)}%`}
          change={useCallback((r) => setCurrentDate1(r), [])}
        />
      </DemoBlock>
      <DemoBlock title='样式定制'>
        <Circle
          currentRate={currentRate3}
          rate={rate}
          speed={100}
          strokeWidth={60}
          text={`宽度定制`}
          change={useCallback((r) => setCurrentDate3(r), [])}
        />
        <Circle
          currentRate={currentRate3}
          color='#ee0a24'
          layerColor='#ebedf0'
          rate={rate}
          speed={100}
          text={`颜色定制`}
          change={useCallback((r) => setCurrentDate3(r), [])}
        />
        <Circle
          currentRate={currentRate2}
          rate={rate}
          speed={100}
          color={gradientColor}
          text={`${currentRate1.toFixed(0)}%`}
          change={useCallback((r) => setCurrentDate2(r), [])}
        />
        <Circle
          currentRate={currentRate4}
          color='#07c160'
          rate={rate}
          speed={100}
          clockwise={false}
          style={{ marginTop: 15 }}
          text={`逆时针`}
          change={useCallback((r) => setCurrentDate4(r), [])}
        />
        <Circle
          currentRate={currentRate4}
          color='#7232dd'
          rate={rate}
          speed={100}
          size='120px'
          clockwise={false}
          text={`大小定制`}
          style={{ marginTop: 15 }}
          change={useCallback((r) => setCurrentDate4(r), [])}
        />
      </DemoBlock>
      <div style={{ marginTop: 15 }}>
        <Button text='增加' type='primary' size='small' click={add} />
        <Button text='减少' type='danger' size='small' click={reduce} />
      </div>
    </MobileLayout>
  )
}

export default CircleDemo
