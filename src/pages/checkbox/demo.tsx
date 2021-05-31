import React, { useCallback, useMemo, useRef, useState } from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import CheckboxGroup from '@/components/CheckboxGroup'
import Checkbox from '@/components/Checkbox'
import Button from '@/components/Button'
import './index.scss'

const CheckboxDemo = () => {
  const [baseChecked, setBaseChecked] = useState(true)
  const [shapeChecked, setShapeChecked] = useState(true)
  const [colorChecked, setColorChecked] = useState(true)
  const [labelChecked, setLabelChecked] = useState(true)
  const [iconChecked, setIconChecked] = useState(true)
  const [result, setResult] = useState(['a', 'b'])
  const [result2, setResult2] = useState<string[]>([])
  const [checkAllResult, setCheckAllResult] = useState<string[]>([])
  const [horizontalResult, setHorizontalResult] = useState<string[]>([])
  const activeIcon = 'https://img.yzcdn.cn/vant/user-active.png'
  const inactiveIcon = 'https://img.yzcdn.cn/vant/user-inactive.png'
  const groupRef = useRef(null)
  const cRef = useRef(null)
  return (
    <MobileLayout title='Checkbox' className='demo-checkbox'>
      <DemoBlock title='基础用法'>
        <Checkbox
          checked={baseChecked}
          change={useCallback((v: boolean) => setBaseChecked(v), [])}
          labelText='复选框1'
          ref={cRef}
        />
        <div className='demo-checkbox-buttons'>
          <Button type='primary' click={() => cRef.current.toggle()}>
            测试toggle
          </Button>
        </div>
      </DemoBlock>
      <DemoBlock title='禁用状态'>
        <Checkbox disabled checked={false} labelText='复选框2' />
        <Checkbox disabled checked labelText='复选框3' />
      </DemoBlock>
      <DemoBlock title='自定义形状'>
        <Checkbox
          checked={shapeChecked}
          labelText='自定义形状'
          shape='square'
          change={useCallback((v: boolean) => setShapeChecked(v), [])}
        />
      </DemoBlock>
      <DemoBlock title='自定义颜色'>
        <Checkbox
          checked={colorChecked}
          labelText='自定义颜色'
          checkedColor='#07c160'
          change={useCallback((v: boolean) => setColorChecked(v), [])}
        />
      </DemoBlock>
      <DemoBlock title='自定义大小'>
        <Checkbox checked={true} labelText='自定义大小' iconSize='24px' />
      </DemoBlock>
      <DemoBlock title='自定义图标'>
        <Checkbox
          checked={iconChecked}
          labelText='自定义图标'
          icon={useMemo(
            () => (
              <img src={iconChecked ? activeIcon : inactiveIcon} />
            ),
            [iconChecked]
          )}
          change={useCallback((v: boolean) => setIconChecked(v), [])}
        />
      </DemoBlock>
      <DemoBlock title='禁用文本点击'>
        <Checkbox
          checked={labelChecked}
          labelText='禁用文本点击'
          labelDisabled
          change={useCallback((v: boolean) => setLabelChecked(v), [])}
        />
      </DemoBlock>
      <DemoBlock title='复选框组'>
        <CheckboxGroup
          value={result}
          change={useCallback((v: string[]) => setResult(v), [])}
        >
          <Checkbox name='a'>复选框 a</Checkbox>
          <Checkbox name='b'>复选框 b</Checkbox>
        </CheckboxGroup>
      </DemoBlock>
      {/* <DemoBlock title='水平排列'>
        <CheckboxGroup
          value={horizontalResult}
          direction='horizontal'
          change={useCallback((v: React.SetStateAction<string[]>) => setHorizontalResult(v), [])}
        >
          <Checkbox name='a'>复选框 a</Checkbox>
          <Checkbox name='b'>复选框 b</Checkbox>
        </CheckboxGroup>
      </DemoBlock>
      <DemoBlock title='限制最大可选数'>
        <CheckboxGroup
          value={result2}
          max={2}
          change={useCallback((v: React.SetStateAction<string[]>) => setResult2(v), [])}
        >
          <Checkbox name='a'>复选框 a</Checkbox>
          <Checkbox name='b'>复选框 b</Checkbox>
          <Checkbox name='c'>复选框 c</Checkbox>
        </CheckboxGroup>
      </DemoBlock>
      <DemoBlock title='全选与反选'>
        <CheckboxGroup
          ref={groupRef}
          value={checkAllResult}
          change={useCallback((v: React.SetStateAction<string[]>) => setCheckAllResult(v), [])}
        >
          <Checkbox name='a'>复选框 a</Checkbox>
          <Checkbox name='b'>复选框 b</Checkbox>
          <Checkbox name='c' disabled checked={false}>
            复选框 c
          </Checkbox>
        </CheckboxGroup>
        <div className='demo-checkbox-buttons'>
          <Button
            type='primary'
            click={() =>
              groupRef.current.toggleAll({ checked: true, skipDisabled: true })
            }
          >
            全选
          </Button>
          <Button type='danger' click={() => groupRef.current.toggleAll()}>
            反选
          </Button>
        </div>
      </DemoBlock> */}
    </MobileLayout>
  )
}

export default CheckboxDemo
