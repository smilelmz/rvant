import React from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import SwipeCell from '@/components/SwipeCell'
import Cell from '@/components/Cell'
import Button from '@/components/Button'
import './index.scss'
import { Interceptor } from '@/components/utils'
import { Toast } from '@/components'

const BasicUsage = () => {
  return (
    <DemoBlock title='基本用法'>
      <SwipeCell
        left={<Button square type='primary' text='选择' />}
        right={[
          <Button key='delete' square type='danger' text='删除' />,
          <Button key='collect' square type='primary' text='收藏' />
        ]}
      >
        <Cell border={false} title='单元格' value='内容' />
      </SwipeCell>
    </DemoBlock>
  )
}

const CustomContent = () => {
  return (
    <DemoBlock title='自定义内容'>
      <SwipeCell
        right={
          <Button
            className='delete-button'
            key='delete'
            square
            type='danger'
            text='删除'
          />
        }
      >
        <div style={{ width: '100%', height: 200, background: '#fff' }}>
          自定义内容
        </div>
      </SwipeCell>
    </DemoBlock>
  )
}

const BeforeClose = () => {
  const beforeClose = ({ position }: { position: string }) => {
    switch (position) {
      case 'left':
      case 'cell':
      case 'outside':
        return true
      case 'right':
        return new Promise((resolve) => {
          Toast.loading({
            onClose: () => {
              resolve(1)
            }
          })
        })
      default:
    }
  }
  return (
    <DemoBlock title='异步关闭'>
      <SwipeCell
        beforeClose={beforeClose as Interceptor}
        left={
          <Button className='delete-button' square type='primary' text='选择' />
        }
        right={
          <Button className='delete-button' square type='danger' text='删除' />
        }
      >
        <Cell border={false} title='单元格' value='内容' />
      </SwipeCell>
    </DemoBlock>
  )
}

const SwipeCellDemo = () => {
  return (
    <MobileLayout title='SwipeCell' className='demo-swipecell'>
      <BasicUsage />
      <CustomContent />
      <BeforeClose />
    </MobileLayout>
  )
}

export default SwipeCellDemo
