import React, { useState } from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import Checkbox from '@/components/Checkbox'
import './index.scss'

const CheckboxDemo = () => {
  const [baseChecked, setBaseChecked] = useState(true)
  const [shapeChecked, setShapeChecked] = useState(true)
  const [colorChecked, setColorChecked] = useState(true)
  const [labelChecked, setLabelChecked] = useState(true)
  const [iconChecked, setIconChecked] = useState(true)
  const activeIcon = 'https://img.yzcdn.cn/vant/user-active.png'
  const inactiveIcon = 'https://img.yzcdn.cn/vant/user-inactive.png'
  return (
    <MobileLayout title='Checkbox' className='demo-checkbox'>
      <DemoBlock title='基础用法'>
        <Checkbox
          checked={baseChecked}
          change={(v: boolean) => setBaseChecked(v)}
          labelText='复选框'
        />
      </DemoBlock>
      <DemoBlock title='禁用状态'>
        <Checkbox disabled checked={false} labelText='复选框' />
        <Checkbox disabled checked labelText='复选框' />
      </DemoBlock>
      <DemoBlock title='自定义形状'>
        <Checkbox
          checked={shapeChecked}
          labelText='自定义形状'
          shape='square'
          change={(v: boolean) => setShapeChecked(v)}
        />
      </DemoBlock>
      <DemoBlock title='自定义颜色'>
        <Checkbox
          checked={colorChecked}
          labelText='自定义颜色'
          checkedColor='#07c160'
          change={(v: boolean) => setColorChecked(v)}
        />
      </DemoBlock>
      <DemoBlock title='自定义图标'>
        <Checkbox
          checked={iconChecked}
          labelText='自定义图标'
          icon={<img src={iconChecked ? activeIcon : inactiveIcon} />}
          change={(v: boolean) => setIconChecked(v)}
        />
      </DemoBlock>
      <DemoBlock title='禁用文本点击'>
        <Checkbox
          checked={labelChecked}
          labelText='禁用文本点击'
          labelDisabled
          change={(v: boolean) => setLabelChecked(v)}
        />
      </DemoBlock>
    </MobileLayout>
  )
}

export default CheckboxDemo
