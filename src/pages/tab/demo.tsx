import React, { useCallback, useState } from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import Tabs from '@/components/Tabs'
import Tab from '@/components/Tab'
import './index.scss'
import { Icon, Toast } from '@/components'
import { Interceptor } from '@/components/utils'

const BasicUsage = () => {
  const [active, setActive] = useState(2)
  const tabs = [1, 2, 3, 4]
  return (
    <DemoBlock title='基本用法'>
      <Tabs
        active={active}
        change={useCallback((v) => setActive(v as number), [])}
      >
        {tabs.map((tab) => {
          return (
            <Tab title={`标签 ${tab}`} key={tab}>
              内容 {tab}
            </Tab>
          )
        })}
      </Tabs>
    </DemoBlock>
  )
}

const MatchByName = () => {
  const [active, setActive] = useState('b')
  return (
    <DemoBlock title='通过名称匹配'>
      <Tabs
        active={active}
        change={useCallback((v) => setActive(v as string), [])}
      >
        <Tab title={`标签 1`} name='a'>
          内容 1
        </Tab>
        <Tab title={`标签 2`} name='b'>
          内容 2
        </Tab>
        <Tab title={`标签 3`} name='c'>
          内容 3
        </Tab>
      </Tabs>
    </DemoBlock>
  )
}

const TabsScroll = () => {
  const tabs = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <DemoBlock title='标签栏滚动'>
      <Tabs>
        {tabs.map((tab, index) => (
          <Tab title={`标签 ${tab}`} key={index}>
            内容 {tab}
          </Tab>
        ))}
      </Tabs>
    </DemoBlock>
  )
}

const DisableTab = () => {
  const tabs = [1, 2, 3]
  const onClickDisabled = (index: number, title: string) => {
    console.log(index, title)
    Toast.info(`${title} 已禁用`)
  }
  return (
    <DemoBlock title='禁用标签'>
      <Tabs disabledFunc={onClickDisabled}>
        {tabs.map((tab, index) => (
          <Tab title={`标签 ${tab}`} key={index} disabled={index === 1}>
            内容 {tab}
          </Tab>
        ))}
      </Tabs>
    </DemoBlock>
  )
}

const BlockStyle = () => {
  const tabs = [1, 2, 3]
  return (
    <DemoBlock title='样式风格'>
      <Tabs type='card'>
        {tabs.map((tab, index) => (
          <Tab title={`标签 ${tab}`} key={index}>
            内容 {tab}
          </Tab>
        ))}
      </Tabs>
    </DemoBlock>
  )
}

const ClickEvent = () => {
  const tabs = [1, 2, 3]
  const onClick = (index: number, title: string) => {
    Toast.info(title)
  }
  return (
    <DemoBlock title='点击事件'>
      <Tabs click={onClick}>
        {tabs.map((tab, index) => (
          <Tab title={`标签 ${tab}`} key={index}>
            内容 {tab}
          </Tab>
        ))}
      </Tabs>
    </DemoBlock>
  )
}

const StickyTab = () => {
  const tabs = [1, 2, 3, 4]
  return (
    <DemoBlock title='粘性布局'>
      <Tabs sticky>
        {tabs.map((tab, index) => (
          <Tab title={`标签 ${tab}`} key={index}>
            内容 {tab}
          </Tab>
        ))}
      </Tabs>
    </DemoBlock>
  )
}

const CustomTag = () => {
  const tabs = [1, 2]
  return (
    <DemoBlock title='自定义标签'>
      <Tabs>
        {tabs.map((tab, index) => (
          <Tab
            customTitle={
              <>
                <Icon name='more-o' />
                标签
              </>
            }
            key={index}
          >
            内容 {tab}
          </Tab>
        ))}
      </Tabs>
    </DemoBlock>
  )
}

const SwitchAnimation = () => {
  const tabs = [1, 2, 3, 4]
  return (
    <DemoBlock title='切换动画'>
      <Tabs animated>
        {tabs.map((tab) => {
          return (
            <Tab title={`标签 ${tab}`} key={tab}>
              内容 {tab}
            </Tab>
          )
        })}
      </Tabs>
    </DemoBlock>
  )
}

const SwipeTab = () => {
  const tabs = [1, 2, 3, 4]
  return (
    <DemoBlock title='滑动切换'>
      <Tabs swipeable>
        {tabs.map((tab) => {
          return (
            <Tab title={`标签 ${tab}`} key={tab}>
              内容 {tab}
            </Tab>
          )
        })}
      </Tabs>
    </DemoBlock>
  )
}

const ScrollTabNav = () => {
  const tabs = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <DemoBlock title='滚动导航'>
      <Tabs scrollspy sticky>
        {tabs.map((tab, index) => (
          <Tab title={`标签 ${tab}`} key={index}>
            内容 {tab}
          </Tab>
        ))}
      </Tabs>
    </DemoBlock>
  )
}

const BeforeChange = () => {
  const tabs = [1, 2, 3, 4]
  const beforeChange = (name: number) => {
    if (name === 1) {
      return false
    }
    return new Promise((resolve) => {
      resolve(name !== 3)
    })
  }
  return (
    <DemoBlock title='异步切换'>
      <Tabs beforeChange={beforeChange as Interceptor}>
        {tabs.map((tab) => {
          return (
            <Tab title={`标签 ${tab}`} key={tab}>
              内容 {tab}
            </Tab>
          )
        })}
      </Tabs>
    </DemoBlock>
  )
}

const TabDemo = () => {
  return (
    <MobileLayout title='Tab' className='demo-tab'>
      <BasicUsage />
      <MatchByName />
      <TabsScroll />
      <DisableTab />
      <BlockStyle />
      <ClickEvent />
      <StickyTab />
      <CustomTag />
      <SwitchAnimation />
      <SwipeTab />
      <ScrollTabNav />
      <BeforeChange />
      <div style={{ height: '80vh' }} />
    </MobileLayout>
  )
}

export default TabDemo
