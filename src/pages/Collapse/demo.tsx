import React, { useCallback, useState } from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import Collapse from '@/components/Collapse'
import CollapseItem from '@/components/CollapseItem'
import './index.scss'
import Icon from '@/components/Icon'

const BaseUsage = () => {
  const [active, setActive] = useState([0])
  return (
    <DemoBlock title='基本用法'>
      <Collapse
        value={active}
        change={useCallback((v) => setActive(v as number[]), [])}
      >
        <CollapseItem title='标题1'>
          代码是写出来给人看的，附带能在机器上运行
        </CollapseItem>
        <CollapseItem title='标题2'>
          代码是写出来给人看的，附带能在机器上运行
        </CollapseItem>
        <CollapseItem title='标题3'>
          代码是写出来给人看的，附带能在机器上运行
        </CollapseItem>
      </Collapse>
    </DemoBlock>
  )
}

const Accordion = () => {
  const [active, setActive] = useState(0)
  return (
    <DemoBlock title='手风琴'>
      <Collapse
        value={active}
        accordion
        change={useCallback((v) => setActive(v as number), [])}
      >
        <CollapseItem title='标题1'>
          代码是写出来给人看的，附带能在机器上运行
        </CollapseItem>
        <CollapseItem title='标题2'>
          代码是写出来给人看的，附带能在机器上运行
        </CollapseItem>
        <CollapseItem title='标题3'>
          代码是写出来给人看的，附带能在机器上运行
        </CollapseItem>
      </Collapse>
    </DemoBlock>
  )
}

const Disabled = () => {
  const [active, setActive] = useState([])
  return (
    <DemoBlock title='禁用状态'>
      <Collapse
        value={active}
        change={useCallback((v) => setActive(v as number[]), [])}
      >
        <CollapseItem title='标题1'>
          代码是写出来给人看的，附带能在机器上运行
        </CollapseItem>
        <CollapseItem title='标题2' disabled>
          代码是写出来给人看的，附带能在机器上运行
        </CollapseItem>
        <CollapseItem title='标题3' disabled>
          代码是写出来给人看的，附带能在机器上运行
        </CollapseItem>
      </Collapse>
    </DemoBlock>
  )
}

const Common = () => {
  const [active, setActive] = useState([])
  return (
    <DemoBlock title='自定义标题内容'>
      <Collapse
        value={active}
        change={useCallback((v) => setActive(v as number[]), [])}
      >
        <CollapseItem
          title={
            <div>
              标题1 <Icon name='question-o' />
            </div>
          }
        >
          代码是写出来给人看的，附带能在机器上运行
        </CollapseItem>
        <CollapseItem title='标题2' value='内容' icon='shop-o'>
          代码是写出来给人看的，附带能在机器上运行
        </CollapseItem>
      </Collapse>
    </DemoBlock>
  )
}

const CollapseDemo = () => {
  return (
    <MobileLayout title='Collapse' className='demo-collapse'>
      <BaseUsage />
      <Accordion />
      <Disabled />
      <Common />
    </MobileLayout>
  )
}

export default CollapseDemo
