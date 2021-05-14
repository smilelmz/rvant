import React, { useState } from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import Popover from '@/components/Popover'
import Toast from '@/components/Toast'
import Button from '@/components/Button'
import Popup from '@/components/Popup'
import Grid from '@/components/Grid'
import GridItem from '@/components/GridItem'
import './index.scss'

const PopoverDemo = () => {
  const [lightTheme, setLightTheme] = useState(false)
  const [darkTheme, setDarkTheme] = useState(false)
  const [showIcon, setShowIcon] = useState(false)
  const [disableAction, setDisableAction] = useState(false)
  const [customContent, setCustomContent] = useState(false)
  const [showPicker, setShowPicker] = useState(false)
  const [placement, setPlacement] = useState(false)
  const onSelect = (action: { text: string }) => Toast.info(action.text)
  return (
    <MobileLayout title='Popover' className='demo-popover'>
      <DemoBlock title='基本用法'>
        <Popover
          show={lightTheme}
          actions={[{ text: '选项一' }, { text: '选项二' }, { text: '选项三' }]}
          placement='bottom-start'
          select={onSelect}
          updateShow={(v: boolean) => setLightTheme(v)}
          reference={<Button type='primary'>浅色风格</Button>}
        />
        <Popover
          show={darkTheme}
          theme='dark'
          actions={[{ text: '选项一' }, { text: '选项二' }, { text: '选项三' }]}
          select={onSelect}
          updateShow={(v: boolean) => setDarkTheme(v)}
          reference={<Button type='primary'>深色风格</Button>}
        />
      </DemoBlock>
      <DemoBlock title='弹出位置'>
        <Button
          className='demo-button'
          type='primary'
          click={() => setShowPicker(true)}
        >
          选择弹出位置
        </Button>
        <Popup
          show={showPicker}
          round
          position='bottom'
          close={() => setShowPicker(false)}
        >
          <div className='demo-popover-box'>
            <Popover
              show={placement}
              theme='dark'
              actions={[{ text: '选项一' }, { text: '选项二' }]}
              select={onSelect}
              placement='bottom-start'
              updateShow={(v: boolean) => setPlacement(v)}
              reference={<div className='demo-popover-refer' />}
            />
          </div>
        </Popup>
      </DemoBlock>
      <DemoBlock title='选项配置'>
        <Popover
          show={showIcon}
          actions={[
            { text: '选项一', icon: 'add-o' },
            { text: '选项二', icon: 'music-o' },
            { text: '选项三', icon: 'more-o' }
          ]}
          placement='bottom-start'
          select={onSelect}
          updateShow={(v: boolean) => setShowIcon(v)}
          reference={<Button type='primary'>展示图标</Button>}
        />
        <Popover
          show={disableAction}
          actions={[
            { text: '选项一', disabled: true },
            { text: '选项二', disabled: true },
            { text: '选项三' }
          ]}
          select={onSelect}
          updateShow={(v: boolean) => setDisableAction(v)}
          reference={<Button type='primary'>禁用选项</Button>}
        />
      </DemoBlock>
      <DemoBlock title='自定义内容'>
        <Popover
          show={customContent}
          placement='top-start'
          select={onSelect}
          updateShow={(v: boolean) => setCustomContent(v)}
          reference={<Button type='primary'>自定义内容</Button>}
        >
          <Grid
            square
            clickable
            border={false}
            columnNum={3}
            style={{ width: 240 }}
          >
            {new Array(6).fill(1).map((_, index) => (
              <GridItem
                key={index}
                text='选项'
                icon='photo-o'
                click={() => setCustomContent(false)}
              />
            ))}
          </Grid>
        </Popover>
      </DemoBlock>
    </MobileLayout>
  )
}

export default PopoverDemo
