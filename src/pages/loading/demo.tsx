import React from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import Loading from '@/components/Loading'
import './index.scss'

const LoadingDemo = () => {
  return (
    <MobileLayout title='Loading' className='demo-loading'>
      <DemoBlock title='加载类型'>
        <Loading />
        <Loading type='spinner' />
      </DemoBlock>
      <DemoBlock title='自定义颜色'>
        <Loading color='#1989fa' />
        <Loading type='spinner' color='#1989fa' />
      </DemoBlock>
      <DemoBlock title='自定义大小'>
        <Loading size='24' />
        <Loading size='24' type='spinner' />
      </DemoBlock>
      <DemoBlock title='加载文案'>
        <Loading size='24px'>加载中...</Loading>
      </DemoBlock>
      <DemoBlock title='垂直排列'>
        <Loading size='24px' vertical>
          加载中...
        </Loading>
      </DemoBlock>
    </MobileLayout>
  )
}

export default LoadingDemo
