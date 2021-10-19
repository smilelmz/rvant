import React, { useRef } from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import { Button, Swipe, SwipeItem, Toast } from '@/components'
import './index.scss'
import { SwipeHandler } from '@/components/Swipe/types'

const images = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
  'https://img.yzcdn.cn/vant/apple-3.jpg',
  'https://img.yzcdn.cn/vant/apple-4.jpg'
]

const BaseUsage = () => {
  const swipeRef = useRef<SwipeHandler>()
  return (
    <DemoBlock title='基本用法'>
      <Swipe ref={swipeRef} autoplay={3000} indicatorColor='white'>
        <SwipeItem>1</SwipeItem>
        <SwipeItem>2</SwipeItem>
        <SwipeItem>3</SwipeItem>
        <SwipeItem>4</SwipeItem>
      </Swipe>
      <div className='btn-group'>
        <Button type='primary' click={() => swipeRef.current.prev()}>
          上一页
        </Button>
        <Button type='success' click={() => swipeRef.current.next()}>
          下一页
        </Button>
        <Button type='danger' click={() => swipeRef.current.swipeTo(0)}>
          第一页
        </Button>
      </div>
    </DemoBlock>
  )
}

const LazyRender = () => {
  return (
    <DemoBlock title='懒加载'>
      <Swipe autoplay={3000} lazyRender>
        {images.map((item, index) => {
          return (
            <SwipeItem key={index}>
              <img src={item} />
            </SwipeItem>
          )
        })}
      </Swipe>
    </DemoBlock>
  )
}

const ListenChange = () => {
  const onChange = (index: number) => {
    Toast.show({
      message: `当前 Swipe 索引：${index}`,
      mask: false
    })
  }
  return (
    <DemoBlock title='监听 change 事件'>
      <Swipe indicatorColor='white' change={onChange}>
        <SwipeItem>1</SwipeItem>
        <SwipeItem>2</SwipeItem>
        <SwipeItem>3</SwipeItem>
        <SwipeItem>4</SwipeItem>
      </Swipe>
    </DemoBlock>
  )
}

const VerticalScrolling = () => {
  return (
    <DemoBlock title='纵向滚动'>
      <Swipe
        autoplay={3000}
        indicatorColor='white'
        vertical
        style={{ height: 200 }}
        className='demo-swipe--vertical'
      >
        <SwipeItem>1</SwipeItem>
        <SwipeItem>2</SwipeItem>
        <SwipeItem>3</SwipeItem>
        <SwipeItem>4</SwipeItem>
      </Swipe>
    </DemoBlock>
  )
}

const SetSwipeItemSize = () => {
  return (
    <DemoBlock title='自定义滑块大小'>
      <Swipe width={300} loop={false} indicatorColor='white'>
        <SwipeItem>1</SwipeItem>
        <SwipeItem>2</SwipeItem>
        <SwipeItem>3</SwipeItem>
        <SwipeItem>4</SwipeItem>
      </Swipe>
    </DemoBlock>
  )
}

const CustomIndicator = () => {
  return (
    <DemoBlock title='自定义指示器'>
      <Swipe
        renderIndicator={(opt: { active: number }) => {
          return <div className='custom-indicator'>{opt.active + 1}/4</div>
        }}
      >
        <SwipeItem>1</SwipeItem>
        <SwipeItem>2</SwipeItem>
        <SwipeItem>3</SwipeItem>
        <SwipeItem>4</SwipeItem>
      </Swipe>
    </DemoBlock>
  )
}

const SwipeDemo = () => {
  return (
    <MobileLayout title='Swipe' className='demo-swipe'>
      <BaseUsage />
      <LazyRender />
      <ListenChange />
      <VerticalScrolling />
      <SetSwipeItemSize />
      <CustomIndicator />
    </MobileLayout>
  )
}

export default SwipeDemo
