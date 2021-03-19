import React, { useState } from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import Switch from '@/components/Switch'
import Cell from '@/components/Cell'
import './index.scss'

const SwitchDemo = () => {
  const [checked, setChecked] = useState(false)
  const [checked2, setChecked2] = useState(false)
  const [checked3, setChecked3] = useState(false)
  const [checked4, setChecked4] = useState(false)
  return (
    <MobileLayout title='Switch' className='demo-switch'>
      <DemoBlock title='基础用法'>
        <Switch
          value={checked}
          change={(v: boolean | ((prevState: boolean) => boolean)) =>
            setChecked(v)
          }
        />
      </DemoBlock>
      <DemoBlock title='禁用状态'>
        <Switch value={true} disabled />
      </DemoBlock>
      <DemoBlock title='加载状态'>
        <Switch value={true} loading />
      </DemoBlock>
      <DemoBlock title='自定义大小'>
        <Switch
          value={checked2}
          size='24px'
          change={(v: boolean | ((prevState: boolean) => boolean)) =>
            setChecked2(v)
          }
        />
      </DemoBlock>
      <DemoBlock title='自定义颜色'>
        <Switch
          value={checked3}
          activeColor='#ee0a24'
          inactiveColor='#dcdee0'
          change={(v: boolean | ((prevState: boolean) => boolean)) =>
            setChecked3(v)
          }
        />
      </DemoBlock>
      <DemoBlock title='搭配单元格使用'>
        <Cell
          title='提醒'
          rightIcon={
            <Switch
              value={checked4}
              change={(v: boolean | ((prevState: boolean) => boolean)) =>
                setChecked4(v)
              }
              size='24'
            />
          }
        />
      </DemoBlock>
    </MobileLayout>
  )
}

export default SwitchDemo
