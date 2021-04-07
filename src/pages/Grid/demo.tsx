import React from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import Grid from '@/components/Grid'
import GridItem from '@/components/GridItem'
import Image from '@/components/Image'
import Toast from '@/components/Toast'
import './index.scss'

const GridDemo = () => {
  return (
    <MobileLayout title='Grid' className='demo-grid'>
      <DemoBlock title='基本用法'>
        <Grid>
          {new Array(4).fill(1).map((_, index) => (
            <GridItem key={index} text='文字' icon='photo-o' />
          ))}
        </Grid>
      </DemoBlock>
      <DemoBlock title='自定义列数'>
        <Grid columnNum={3}>
          {new Array(6).fill(1).map((_, index) => (
            <GridItem key={index} text='文字' icon='photo-o' />
          ))}
        </Grid>
      </DemoBlock>
      <DemoBlock title='自定义内容'>
        <Grid border={false} columnNum={3}>
          <GridItem>
            <Image fit='contain' src='https://img.yzcdn.cn/vant/apple-1.jpg' />
          </GridItem>
          <GridItem>
            <Image fit='contain' src='https://img.yzcdn.cn/vant/apple-2.jpg' />
          </GridItem>
          <GridItem>
            <Image fit='contain' src='https://img.yzcdn.cn/vant/apple-3.jpg' />
          </GridItem>
        </Grid>
      </DemoBlock>
      <DemoBlock title='正方形格子'>
        <Grid square>
          {new Array(8).fill(1).map((_, index) => (
            <GridItem key={index} text='文字' icon='photo-o' />
          ))}
        </Grid>
      </DemoBlock>
      <DemoBlock title='格子间距'>
        <Grid gutter={10}>
          {new Array(8).fill(1).map((_, index) => (
            <GridItem key={index} text='文字' icon='photo-o' />
          ))}
        </Grid>
      </DemoBlock>
      <DemoBlock title='内容横排'>
        <Grid direction='horizontal' columnNum={3}>
          <GridItem text='文字' icon='photo-o' />
          <GridItem text='文字' icon='photo-o' />
          <GridItem text='文字' icon='photo-o' />
        </Grid>
      </DemoBlock>
      <DemoBlock title='点击事件'>
        <Grid columnNum={2}>
          <GridItem
            text='文字'
            icon='home-o'
            click={() => Toast.info('点击了GridItem 1')}
          />
          <GridItem
            text='文字'
            icon='search'
            click={() => Toast.info('点击了GridItem 2')}
          />
        </Grid>
      </DemoBlock>
      <DemoBlock title='徽标提示'>
        <Grid columnNum={2}>
          <GridItem text='文字' icon='home-o' dot />
          <GridItem text='文字' icon='search' badge='99+' />
        </Grid>
      </DemoBlock>
    </MobileLayout>
  )
}

export default GridDemo
