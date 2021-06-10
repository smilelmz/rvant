import React, { useCallback, useState } from 'react'
import { MobileLayout } from '@/doc'
import Sidebar from '@/components/Sidebar'
import SidebarItem from '@/components/SidebarItem'
import Grid from '@/components/Grid'
import GridItem from '@/components/GridItem'
import './index.scss'
import Toast from '@/components/Toast'

const BasicUsage = () => {
  const [active, setActive] = useState(0)
  return (
    <GridItem>
      <h3 className='demo-sidebar-title'>基本用法</h3>
      <Sidebar
        value={active}
        change={useCallback((v) => setActive(v as number), [])}
      >
        <SidebarItem title='标签名' />
        <SidebarItem title='标签名' />
        <SidebarItem title='标签名' />
      </Sidebar>
    </GridItem>
  )
}

const ShowBadge = () => {
  const [active, setActive] = useState(0)
  return (
    <GridItem>
      <h3 className='demo-sidebar-title'>徽标提示</h3>
      <Sidebar
        value={active}
        change={useCallback((v) => setActive(v as number), [])}
      >
        <SidebarItem title='标签名' dot />
        <SidebarItem title='标签名' badge='5' />
        <SidebarItem title='标签名' badge='20' />
      </Sidebar>
    </GridItem>
  )
}

const Disabled = () => {
  const [active, setActive] = useState(0)
  return (
    <GridItem>
      <h3 className='demo-sidebar-title'>禁用选项</h3>
      <Sidebar
        value={active}
        change={useCallback((v) => setActive(v as number), [])}
      >
        <SidebarItem title='标签名' />
        <SidebarItem title='标签名' disabled />
        <SidebarItem title='标签名' />
      </Sidebar>
    </GridItem>
  )
}

const ChangeEvent = () => {
  const [active, setActive] = useState(0)
  const onChange = useCallback((v) => {
    Toast.info(`标签名 ${v}`)
    setActive(v as number)
  }, [])
  return (
    <GridItem>
      <h3 className='demo-sidebar-title'>监听切换事件</h3>
      <Sidebar value={active} change={onChange}>
        <SidebarItem title='标签名 1' />
        <SidebarItem title='标签名 2' />
        <SidebarItem title='标签名 3' />
      </Sidebar>
    </GridItem>
  )
}

const SidebarDemo = () => {
  return (
    <MobileLayout title='Sidebar' className='demo-sidebar'>
      <Grid columnNum={2} border={false}>
        <BasicUsage />
        <ShowBadge />
        <Disabled />
        <ChangeEvent />
      </Grid>
    </MobileLayout>
  )
}

export default SidebarDemo
