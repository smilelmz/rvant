import React, { useCallback, useMemo, useState } from 'react'
import { MobileLayout } from '@/doc'
import PullRefresh from '@/components/PullRefresh'
import { Tab, Tabs, Toast } from '@/components'
import './index.scss'

const BasicUsage = () => {
  const [loading, setLoading] = useState(false)
  const [count, setCount] = useState(0)
  const onRefresh = (showToast: boolean) => {
    setTimeout(() => {
      if (showToast) {
        Toast.info('刷新成功')
      }
      setLoading(false)
      setCount(count + 1)
    }, 1000)
  }
  const tips = useMemo(() => {
    if (count) {
      return `刷新试试: ${count}`
    }
    return '下拉试试'
  }, [count])
  return (
    <PullRefresh
      value={loading}
      change={useCallback((v: boolean) => setLoading(v), [])}
      refresh={() => onRefresh(true)}
    >
      <p>{tips}</p>
    </PullRefresh>
  )
}

const SuccessTips = () => {
  const [loading, setLoading] = useState(false)
  const [count, setCount] = useState(0)
  const onRefresh = (showToast: boolean) => {
    setTimeout(() => {
      if (showToast) {
        Toast.info('刷新成功')
      }
      setLoading(false)
      setCount(count + 1)
    }, 1000)
  }
  const tips = useMemo(() => {
    if (count) {
      return `刷新试试: ${count}`
    }
    return '下拉试试'
  }, [count])
  return (
    <PullRefresh
      value={loading}
      successText='刷新成功'
      change={useCallback((v: boolean) => setLoading(v), [])}
      refresh={() => onRefresh(false)}
    >
      <p>{tips}</p>
    </PullRefresh>
  )
}

const CustomTips = () => {
  const [loading, setLoading] = useState(false)
  const [count, setCount] = useState(0)
  const onRefresh = (showToast: boolean) => {
    setTimeout(() => {
      if (showToast) {
        Toast.info('刷新成功')
      }
      setLoading(false)
      setCount(count + 1)
    }, 1000)
  }
  const tips = useMemo(() => {
    if (count) {
      return `刷新试试: ${count}`
    }
    return '下拉试试'
  }, [count])
  return (
    <PullRefresh
      value={loading}
      headHeight={80}
      change={useCallback((v: boolean) => setLoading(v), [])}
      refresh={() => onRefresh(true)}
      pulling={({ distance }) => (
        <img
          className='doge'
          src='https://b.yzcdn.cn/vant/doge.png'
          style={{ transform: `scale(${distance / 80})` }}
        />
      )}
      loosing={() => (
        <img src='https://b.yzcdn.cn/vant/doge.png' className='doge' />
      )}
      loading={() => (
        <img src='https://b.yzcdn.cn/vant/doge-fire.jpg' className='doge' />
      )}
    >
      <p>{tips}</p>
    </PullRefresh>
  )
}

const PullRefreshDemo = () => {
  return (
    <MobileLayout title='PullRefresh' className='demo-pull-refresh'>
      <Tabs>
        <Tab title='基础用法' name='a'>
          <BasicUsage />
        </Tab>
        <Tab title='成功提示' name='b'>
          <SuccessTips />
        </Tab>
        <Tab title='自定义提示' name='c'>
          <CustomTips />
        </Tab>
      </Tabs>
    </MobileLayout>
  )
}

export default PullRefreshDemo
