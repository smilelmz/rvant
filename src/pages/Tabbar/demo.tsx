import React, { useCallback, useState } from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import Tabbar from '@/components/Tabbar'
import TabbarItem from '@/components/TabbarItem'
import './index.scss'
import Toast from '@/components/Toast'

const BaseUsage = () => {
  const [active, setActive] = useState(0)
  return (
    <DemoBlock title='基本用法'>
      <Tabbar
        value={active}
        change={useCallback((v) => setActive(v as number), [])}
      >
        <TabbarItem icon='home-o'>标签</TabbarItem>
        <TabbarItem icon='search'>标签</TabbarItem>
        <TabbarItem icon='friends-o'>标签</TabbarItem>
        <TabbarItem icon='setting-o'>标签</TabbarItem>
      </Tabbar>
    </DemoBlock>
  )
}

const MatchByName = () => {
  const [active, setActive] = useState('home')
  return (
    <DemoBlock title='通过名称匹配'>
      <Tabbar
        value={active}
        change={useCallback((v) => setActive(v as string), [])}
      >
        <TabbarItem name='home' icon='home-o'>
          标签
        </TabbarItem>
        <TabbarItem name='search' icon='search'>
          标签
        </TabbarItem>
        <TabbarItem name='friends' icon='friends-o'>
          标签
        </TabbarItem>
        <TabbarItem name='setting' icon='setting-o'>
          标签
        </TabbarItem>
      </Tabbar>
    </DemoBlock>
  )
}

const Badge = () => {
  const [active, setActive] = useState(0)
  return (
    <DemoBlock title='徽标提示'>
      <Tabbar
        value={active}
        change={useCallback((v) => setActive(v as number), [])}
      >
        <TabbarItem icon='home-o'>标签</TabbarItem>
        <TabbarItem icon='search' dot>
          标签
        </TabbarItem>
        <TabbarItem icon='friends-o' badge='5'>
          标签
        </TabbarItem>
        <TabbarItem icon='setting-o' badge='20'>
          标签
        </TabbarItem>
      </Tabbar>
    </DemoBlock>
  )
}

const CustomIcon = () => {
  const [active, setActive] = useState(0)
  const icon = {
    active: 'https://img.yzcdn.cn/vant/user-active.png',
    inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
  }
  return (
    <DemoBlock title='自定义图标'>
      <Tabbar
        value={active}
        change={useCallback((v) => setActive(v as number), [])}
      >
        <TabbarItem
          customIcon={(active) => (
            <img src={active ? icon.active : icon.inactive} />
          )}
        >
          标签
        </TabbarItem>
        <TabbarItem icon='search'>标签</TabbarItem>
        <TabbarItem icon='setting-o'>标签</TabbarItem>
      </Tabbar>
    </DemoBlock>
  )
}

const CustomColor = () => {
  const [active, setActive] = useState(0)
  return (
    <DemoBlock title='自定义颜色'>
      <Tabbar
        value={active}
        activeColor='#ee0a24'
        inactiveColor='#000'
        change={useCallback((v) => setActive(v as number), [])}
      >
        <TabbarItem icon='home-o'>标签</TabbarItem>
        <TabbarItem icon='search'>标签</TabbarItem>
        <TabbarItem icon='friends-o'>标签</TabbarItem>
        <TabbarItem icon='setting-o'>标签</TabbarItem>
      </Tabbar>
    </DemoBlock>
  )
}

const SwitchEvent = () => {
  const [active, setActive] = useState(0)
  const onChange = useCallback((v) => {
    Toast.info(v)
    setActive(v as number)
  }, [])
  return (
    <DemoBlock title='监听切换事件'>
      <Tabbar value={active} change={onChange}>
        <TabbarItem icon='home-o'>标签</TabbarItem>
        <TabbarItem icon='search'>标签</TabbarItem>
        <TabbarItem icon='friends-o'>标签</TabbarItem>
        <TabbarItem icon='setting-o'>标签</TabbarItem>
      </Tabbar>
    </DemoBlock>
  )
}

const TabbarDemo = () => {
  return (
    <MobileLayout title='Tabbar' className='demo-tabbar'>
      <BaseUsage />
      <MatchByName />
      <Badge />
      <CustomIcon />
      <CustomColor />
      <SwitchEvent />
    </MobileLayout>
  )
}

export default TabbarDemo
