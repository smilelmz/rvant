import React, { useState } from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import RadioGroup from '@/components/RadioGroup'
import Radio from '@/components/Radio'
import Cell from '@/components/Cell'
import CellGroup from '@/components/CellGroup'
import './index.scss'

const RadioDemo = () => {
  const [baseRadio, setBaseRadio] = useState('1')
  const [dirRadio, setDirRadio] = useState('1')
  const [disabledAll, setDisabledAll] = useState('1')
  const [shapeRadio, setShapeRadio] = useState('1')
  const [sizeRadio, setSizeRadio] = useState('1')
  const [iconRadio, setIconRadio] = useState('1')
  const [textRadio, setTextRadio] = useState('1')
  const activeIcon = 'https://img.yzcdn.cn/vant/user-active.png'
  const inactiveIcon = 'https://img.yzcdn.cn/vant/user-inactive.png'
  return (
    <MobileLayout title='Radio' className='demo-radio'>
      <DemoBlock title='基础用法'>
        <RadioGroup
          className='demo-radio-group'
          value={baseRadio}
          change={(v: any) => setBaseRadio(v)}
        >
          <Radio name='1' labelText='单选框 1' />
          <Radio name='2' labelText='单选框 2' />
        </RadioGroup>
      </DemoBlock>
      <DemoBlock title='水平排列'>
        <RadioGroup
          className='demo-radio-group'
          value={dirRadio}
          direction='horizontal'
          change={(v: any) => setDirRadio(v)}
        >
          <Radio name='1' labelText='单选框 1' />
          <Radio name='2' labelText='单选框 2' />
        </RadioGroup>
      </DemoBlock>
      <DemoBlock title='禁用全部'>
        <RadioGroup
          className='demo-radio-group'
          disabled
          value={disabledAll}
          change={(v: any) => setDisabledAll(v)}
        >
          <Radio name='1' labelText='单选框 1' />
          <Radio name='2' labelText='单选框 2' />
        </RadioGroup>
      </DemoBlock>
      <DemoBlock title='自定义形状'>
        <RadioGroup
          className='demo-radio-group'
          value={shapeRadio}
          change={(v: any) => setShapeRadio(v)}
        >
          <Radio name='1' labelText='单选框 1' shape='square' />
          <Radio name='2' labelText='单选框 2' shape='square' />
        </RadioGroup>
      </DemoBlock>
      <DemoBlock title='自定义颜色'>
        <RadioGroup
          className='demo-radio-group'
          value={shapeRadio}
          change={(v: any) => setShapeRadio(v)}
        >
          <Radio name='1' labelText='单选框 1' checkedColor='#07c160' />
          <Radio name='2' labelText='单选框 2' checkedColor='#07c160' />
        </RadioGroup>
      </DemoBlock>
      <DemoBlock title='自定义大小'>
        <RadioGroup
          className='demo-radio-group'
          value={sizeRadio}
          change={(v: any) => setSizeRadio(v)}
        >
          <Radio
            name='1'
            labelText='单选框 1'
            checkedColor='#07c160'
            iconSize='24px'
          />
          <Radio
            name='2'
            labelText='单选框 2'
            checkedColor='#07c160'
            iconSize='24px'
          />
        </RadioGroup>
      </DemoBlock>
      <DemoBlock title='自定义图标'>
        <RadioGroup
          className='demo-radio-group'
          value={iconRadio}
          change={(v: any) => setIconRadio(v)}
        >
          <Radio
            name='1'
            labelText='单选框 1'
            icon={<img src={iconRadio === '1' ? activeIcon : inactiveIcon} />}
          />
          <Radio
            name='2'
            labelText='单选框 2'
            icon={<img src={iconRadio === '2' ? activeIcon : inactiveIcon} />}
          />
        </RadioGroup>
      </DemoBlock>
      <DemoBlock title='禁用文本点击'>
        <RadioGroup
          className='demo-radio-group'
          value={textRadio}
          change={(v: any) => setTextRadio(v)}
        >
          <Radio name='1' labelText='单选框 1' labelDisabled />
          <Radio name='2' labelText='单选框 2' labelDisabled />
        </RadioGroup>
      </DemoBlock>
      <DemoBlock title='配合Cell'>
        <CellGroup>
          <Cell title='单元格' />
          <Cell title='单元格' />
        </CellGroup>
      </DemoBlock>
    </MobileLayout>
  )
}

export default RadioDemo
