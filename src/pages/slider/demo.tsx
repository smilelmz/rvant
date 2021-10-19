import React, { useState } from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import Slider from '@/components/Slider'
import Toast from '@/components/Toast'
import { SliderValue } from '@/components/Slider/types'
import './index.scss'

const SliderDemo = () => {
  const [value1, setValue1] = useState<SliderValue | undefined>(50)
  const [value2, setValue2] = useState<SliderValue | undefined>([20, 60])
  const [value3, setValue3] = useState<SliderValue | undefined>(0)
  const [value4, setValue4] = useState<SliderValue | undefined>(50)
  const [value5, setValue5] = useState<SliderValue | undefined>(50)
  const [value6, setValue6] = useState<SliderValue | undefined>(50)
  const [value7, setValue7] = useState<SliderValue | undefined>(50)
  const [value8, setValue8] = useState<SliderValue | undefined>(50)
  const [value9, setValue9] = useState<SliderValue | undefined>([20, 60])
  const onChange = (v: React.SetStateAction<SliderValue | undefined>) => {
    setValue1(v)
    Toast.info(`Current value: ${v}`)
  }
  return (
    <MobileLayout title='Slider' className='demo-slider'>
      <DemoBlock title='基本用法'>
        <Slider value={value1} change={onChange} />
      </DemoBlock>
      <DemoBlock title='双滑块'>
        <Slider range value={value2} change={(v) => setValue2(v)} />
      </DemoBlock>
      <DemoBlock title='指定选择范围'>
        <Slider
          value={value3}
          change={(v) => setValue3(v)}
          min={-50}
          max={50}
        />
      </DemoBlock>
      <DemoBlock title='禁用'>
        <Slider disabled value={value4} change={(v) => setValue4(v)} />
      </DemoBlock>
      <DemoBlock title='指定步长'>
        <Slider value={value5} step={10} change={(v) => setValue5(v)} />
      </DemoBlock>
      <DemoBlock title='自定义样式'>
        <Slider
          value={value6}
          barHeight='4px'
          activeColor='#ee0a24'
          change={(v) => setValue6(v)}
        />
      </DemoBlock>
      <DemoBlock title='自定义按钮'>
        <Slider
          value={value7}
          activeColor='#ee0a24'
          button={<div className='custom-button'>{value7}</div>}
          dragMove={(v) => setValue7(v)}
        />
      </DemoBlock>
      <DemoBlock title='垂直方向'>
        <div style={{ height: '150px', paddingLeft: '30px' }}>
          <Slider vertical value={value8} change={(v) => setValue8(v)} />
          <Slider
            vertical
            range
            value={value9}
            change={(v) => setValue9(v)}
            style={{ marginLeft: 100 }}
          />
        </div>
      </DemoBlock>
    </MobileLayout>
  )
}

export default SliderDemo
