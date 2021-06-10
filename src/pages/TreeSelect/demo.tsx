import React, { useCallback, useState } from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import TreeSelect from '@/components/TreeSelect'
import Image from '@/components/Image'
import { zhCNData } from './data-zh'
import './index.scss'
import { deepClone } from '@/components/utils'

const BasicUsage = () => {
  const [activeId, setActiveId] = useState(1)
  const [mainActiveIndex, setMainActiveIndex] = useState(0)
  return (
    <DemoBlock title='基本用法'>
      <TreeSelect
        activeId={activeId}
        mainActiveIndex={mainActiveIndex}
        updateActiveId={useCallback((v) => setActiveId(v as number), [])}
        updateMainActiveIndex={useCallback(
          (v) => setMainActiveIndex(v as number),
          []
        )}
        items={zhCNData}
      />
    </DemoBlock>
  )
}

const MultipleMode = () => {
  const [activeId, setActiveId] = useState([1, 2])
  const [mainActiveIndex, setMainActiveIndex] = useState(0)
  return (
    <DemoBlock title='多选模式'>
      <TreeSelect
        activeId={activeId}
        mainActiveIndex={mainActiveIndex}
        updateActiveId={useCallback((v) => setActiveId(v as number[]), [])}
        updateMainActiveIndex={useCallback(
          (v) => setMainActiveIndex(v as number),
          []
        )}
        items={zhCNData}
      />
    </DemoBlock>
  )
}

const CustomContent = () => {
  const [mainActiveIndex, setMainActiveIndex] = useState(1)
  const renderContent = () => {
    if (mainActiveIndex === 1) {
      return (
        <Image
          showLoading={false}
          src='https://img.yzcdn.cn/vant/apple-1.jpg'
        />
      )
    }
    return (
      <Image showLoading={false} src='https://img.yzcdn.cn/vant/apple-2.jpg' />
    )
  }
  return (
    <DemoBlock title='自定义内容'>
      <TreeSelect
        height='70vw'
        mainActiveIndex={mainActiveIndex}
        updateMainActiveIndex={useCallback(
          (v) => setMainActiveIndex(v as number),
          []
        )}
        items={[{ text: '分组 1' }, { text: '分组 2' }]}
        content={renderContent()}
      />
    </DemoBlock>
  )
}

const ShowBadge = () => {
  const [activeId, setActiveId] = useState(1)
  const [mainActiveIndex, setMainActiveIndex] = useState(0)
  const badgeItems = () => {
    const data = deepClone(zhCNData).slice(0, 2)
    data[0].dot = true
    data[1].badge = 5
    return data
  }
  return (
    <DemoBlock title='徽标提示'>
      <TreeSelect
        activeId={activeId}
        mainActiveIndex={mainActiveIndex}
        updateActiveId={useCallback((v) => setActiveId(v as number), [])}
        updateMainActiveIndex={useCallback(
          (v) => setMainActiveIndex(v as number),
          []
        )}
        items={badgeItems()}
      />
    </DemoBlock>
  )
}

const TreeSelectDemo = () => {
  return (
    <MobileLayout title='TreeSelect' className='demo-treeselect'>
      <BasicUsage />
      <MultipleMode />
      <CustomContent />
      <ShowBadge />
    </MobileLayout>
  )
}

export default TreeSelectDemo
