import React from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import Toast from '@/components/Toast'
import Cell from '@/components/Cell'
import './index.scss'

const ToastDemo = () => {
  const showText = () => {
    Toast.info('提示内容', 10)
  }
  const showLoading = () => {
    Toast.loading({ message: '加载提示' })
  }
  const showSuccess = () => {
    Toast.success('成功提示')
  }
  const showFailure = () => {
    Toast.fail('失败提示')
  }
  const showIcon = () => {
    Toast.show({
      message: '自定义图标',
      icon: 'like-o'
    })
  }
  const showIconUrl = () => {
    Toast.show({
      message: '自定义图片',
      icon: 'https://img.yzcdn.cn/vant/logo.png'
    })
  }
  const showCommonLoading = () => {
    Toast.show({
      type: 'loading',
      message: '加载中...',
      loadingType: 'spinner'
    })
  }
  const showTop = () => {
    Toast.show({
      message: '顶部展示',
      position: 'top'
    })
  }
  const showBottom = () => {
    Toast.show({
      message: '底部展示',
      position: 'bottom'
    })
  }

  return (
    <MobileLayout title='Toast' className='demo-toast'>
      <DemoBlock title='基础用法'>
        <Cell title='文字提示' isLink click={showText} />
        <Cell title='加载提示' isLink click={showLoading} />
        <Cell title='成功提示' isLink click={showSuccess} />
        <Cell title='失败提示' isLink click={showFailure} />
      </DemoBlock>
      <DemoBlock title='自定义图标'>
        <Cell title='自定义图标' isLink click={showIcon} />
        <Cell title='自定义图片' isLink click={showIconUrl} />
        <Cell title='自定义加载图标' isLink click={showCommonLoading} />
      </DemoBlock>
      <DemoBlock title='自定义位置'>
        <Cell title='顶部提示' isLink click={showTop} />
        <Cell title='底部展示' isLink click={showBottom} />
      </DemoBlock>
    </MobileLayout>
  )
}

export default ToastDemo
