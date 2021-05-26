import React from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import NavBar from '@/components/NavBar'
import Toast from '@/components/Toast'
import Icon from '@/components/Icon'
import './index.scss'

const NavBarDemo = () => {
  const onClickLeft = () => Toast.info('返回')
  const onClickRight = () => Toast.info('按钮')
  return (
    <MobileLayout title='NavBar' className='demo-navbar'>
      <DemoBlock title='基本用法'>
        <NavBar
          title='标题'
          leftText='返回'
          rightText='按钮'
          leftArrow
          clickLeft={onClickLeft}
          clickRight={onClickRight}
        />
      </DemoBlock>
      <DemoBlock title='自定义右侧'>
        <NavBar
          title='标题'
          leftText='返回'
          right={<Icon name='search' size='18' />}
          leftArrow
        />
      </DemoBlock>
      {/* <DemoBlock title='基本用法'>
        <NavBar
          title='标题'
          leftText='返回'
          rightText='按钮'
          leftArrow
          fixed
          placeholder
          clickLeft={onClickLeft}
          clickRight={onClickRight}
        />
      </DemoBlock> */}
    </MobileLayout>
  )
}

export default NavBarDemo
