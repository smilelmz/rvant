import React, { useState } from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import Rate from '@/components/Rate'
import './index.scss'

const RateDemo = () => {
  const [rateValue, setRateValue] = useState(5)
  const [rateIcon, setRateIcon] = useState(5)
  const [rateStyle, setRateStyle] = useState(5)
  const [rateHalf, setRateHalf] = useState(2.5)
  const [rateCount, setRateCount] = useState(6)
  return (
    <MobileLayout title='Rate' className='demo-rate'>
      <DemoBlock title='基础用法'>
        <Rate value={rateValue} change={(v: number) => setRateValue(v)} />
      </DemoBlock>
      <DemoBlock title='自定义图标'>
        <Rate
          value={rateIcon}
          icon='like'
          voidIcon='like-o'
          change={(v: number) => setRateIcon(v)}
        />
      </DemoBlock>
      <DemoBlock title='自定义样式'>
        <Rate
          value={rateStyle}
          size='25'
          color='#ffd21e'
          voidIcon='star'
          voidColor='#eee'
          change={(v: number) => setRateStyle(v)}
        />
      </DemoBlock>
      <DemoBlock title='半星'>
        <Rate
          value={rateHalf}
          allowHalf
          change={(v: number) => setRateHalf(v)}
        />
      </DemoBlock>
      <DemoBlock title='自定义数量'>
        <Rate
          value={rateCount}
          count={6}
          change={(v: number) => setRateCount(v)}
        />
      </DemoBlock>
      <DemoBlock title='禁用状态'>
        <Rate value={3} disabled />
      </DemoBlock>
      <DemoBlock title='只读状态'>
        <Rate value={3} readonly />
      </DemoBlock>
    </MobileLayout>
  )
}

export default RateDemo
