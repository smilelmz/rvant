import React from 'react'
import { MobileLayout } from '@/doc'
import IndexBar from '@/components/IndexBar'
import IndexAnchor from '@/components/IndexAnchor'
import Cell from '@/components/Cell'
import './index.scss'
import Tabs from '@/components/Tabs'
import Tab from '@/components/Tab'

const BaseUsage = () => {
  const indexList = []
  const charCodeOfA = 'A'.charCodeAt(0)

  for (let i = 0; i < 26; i++) {
    indexList.push(String.fromCharCode(charCodeOfA + i))
  }

  return (
    <IndexBar>
      {indexList.map((item, index) => {
        return (
          <IndexAnchor anchor={item} key={index} index={item}>
            <Cell title={`文本 ${item}`} />
            <Cell title={`文本 ${item}`} />
            <Cell title={`文本 ${item}`} />
          </IndexAnchor>
        )
      })}
    </IndexBar>
  )
}

const Common = () => {
  const customIndexList = [1, 2, 3, 4, 5, 6, 8, 9, 10]

  return (
    <IndexBar indexList={customIndexList}>
      {customIndexList.map((item, index) => {
        return (
          <IndexAnchor anchor={`标题 ${item}`} key={index} index={item}>
            <Cell title={`文本 ${item}`} />
            <Cell title={`文本 ${item}`} />
            <Cell title={`文本 ${item}`} />
          </IndexAnchor>
        )
      })}
    </IndexBar>
  )
}

const IndexBarDemo = () => {
  return (
    <MobileLayout title='IndexBar' className='demo-indexbar'>
      <Tabs>
        <Tab title={`基础用法`} name='a'>
          <BaseUsage />
        </Tab>
        <Tab title={`自定义索引列表`} name='b'>
          <Common />
        </Tab>
      </Tabs>
    </MobileLayout>
  )
}

export default IndexBarDemo
