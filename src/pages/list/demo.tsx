import React, { useCallback, useState } from 'react'
import { MobileLayout } from '@/doc'
import List from '@/components/List'
import { Cell, PullRefresh, Tab, Tabs } from '@/components'
import './index.scss'

const BaseUsage = () => {
  const [items, setItems] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [finished, setFinished] = useState(false)

  const onLoad = () => {
    setLoading(true)
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        const text = items.length + 1
        items.push(text < 10 ? `0${text}` : String(text))
      }

      setItems(items)
      setLoading(false)

      if (items.length >= 40) {
        setFinished(true)
      }
    }, 2000)
  }

  return (
    <List
      loading={loading}
      finished={finished}
      finishedText='没有更多了'
      load={onLoad}
      updateLoading={(v) => setLoading(v)}
    >
      {items.map((item, index) => (
        <Cell title={item} key={index} />
      ))}
    </List>
  )
}

const ErrorInfo = () => {
  const [items, setItems] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [finished, setFinished] = useState(false)

  const onLoad = () => {
    setLoading(true)
    setTimeout(() => {
      const newItems = items
      for (let i = 0; i < 10; i++) {
        const text = newItems.length + 1
        newItems.push(text < 10 ? `0${text}` : String(text))
      }

      setItems(newItems)
      setLoading(false)

      if (newItems.length === 10 && !error) {
        setError(true)
      } else {
        setError(false)
      }

      if (newItems.length >= 40) {
        setFinished(true)
      }
    }, 2000)
  }

  return (
    <List
      loading={loading}
      error={error}
      finished={finished}
      finishedText='没有更多了'
      errorText='请求失败，点击重新加载'
      load={onLoad}
      updateLoading={(v) => setLoading(v)}
      updateError={(v) => setError(v)}
    >
      {items.map((item, index) => (
        <Cell title={item} key={index} />
      ))}
    </List>
  )
}

const RefreshList = () => {
  const [items, setItems] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [finished, setFinished] = useState(false)

  const onLoad = () => {
    setLoading(true)
    setTimeout(() => {
      let newItems = items
      if (refreshing) {
        newItems = []
      }
      for (let i = 0; i < 10; i++) {
        const text = newItems.length + 1
        newItems.push(text < 10 ? `0${text}` : String(text))
      }

      setItems(newItems)
      setLoading(false)
      setRefreshing(false)

      if (newItems.length >= 40) {
        setFinished(true)
      }
    }, 2000)
  }

  const onRefresh = () => {
    setFinished(false)
    onLoad()
  }

  return (
    <PullRefresh
      value={refreshing}
      change={useCallback((v: boolean) => setRefreshing(v), [])}
      refresh={() => onRefresh()}
    >
      <List
        loading={loading}
        finished={finished}
        finishedText='没有更多了'
        load={onLoad}
        updateLoading={(v) => setLoading(v)}
      >
        {items.map((item, index) => (
          <Cell title={item} key={index} />
        ))}
      </List>
    </PullRefresh>
  )
}

const ListDemo = () => {
  return (
    <MobileLayout title='List' className='demo-list'>
      <Tabs>
        <Tab title='基础用法' name='a'>
          <BaseUsage />
        </Tab>
        <Tab title='成功提示' name='b'>
          <ErrorInfo />
        </Tab>
        <Tab title='自定义提示' name='c'>
          <RefreshList />
        </Tab>
      </Tabs>
    </MobileLayout>
  )
}

export default ListDemo
