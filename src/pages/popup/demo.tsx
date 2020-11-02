import React, { useState } from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import Popup from '@/components/Popup'
import Cell from '@/components/Cell'
import './index.scss'

const PopupDemo = () => {
  const [showBase, setShowBase] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const [showBottom, setShowBottom] = useState(false)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  const [showIconOne, setShowIconOne] = useState(false)
  const [showIconTwo, setShowIconTwo] = useState(false)
  const [showIconThree, setShowIconThree] = useState(false)
  const [showRound, setShowRound] = useState(false)
  return (
    <MobileLayout title='Popup' className='demo-popup'>
      <DemoBlock title='基础用法' card>
        <Popup
          show={showBase}
          style={{ padding: '30px 50px' }}
          close={() => setShowBase(false)}
        >
          center
        </Popup>
        <Cell title='展示弹出层' isLink click={() => setShowBase(true)} />
      </DemoBlock>
      <DemoBlock title='弹出位置' card>
        <Cell title='顶部弹出' isLink click={() => setShowTop(true)} />
        <Cell title='底部弹出' isLink click={() => setShowBottom(true)} />
        <Cell title='左侧弹出' isLink click={() => setShowLeft(true)} />
        <Cell title='右侧弹出' isLink click={() => setShowRight(true)} />
        <Popup
          show={showTop}
          style={{ height: '30%' }}
          position='top'
          close={() => setShowTop(false)}
        />
        <Popup
          show={showBottom}
          style={{ height: '30%' }}
          position='bottom'
          close={() => setShowBottom(false)}
        />
        <Popup
          show={showLeft}
          style={{ width: '30%', height: '100%' }}
          position='left'
          close={() => setShowLeft(false)}
        />
        <Popup
          show={showRight}
          style={{ width: '30%', height: '100%' }}
          position='right'
          close={() => setShowRight(false)}
        />
      </DemoBlock>
      <DemoBlock title='关闭图标' card>
        <Cell title='关闭图标' isLink click={() => setShowIconOne(true)} />
        <Cell title='自定义图标' isLink click={() => setShowIconTwo(true)} />
        <Cell title='图标位置' isLink click={() => setShowIconThree(true)} />
        <Popup
          show={showIconOne}
          style={{ height: '30%' }}
          position='bottom'
          closeable
          close={() => setShowIconOne(false)}
        />
        <Popup
          show={showIconTwo}
          style={{ height: '30%' }}
          position='bottom'
          closeable
          closeIcon='close'
          close={() => setShowIconTwo(false)}
        />
        <Popup
          show={showIconThree}
          style={{ height: '30%' }}
          closeable
          closeIconPosition='top-left'
          position='bottom'
          close={() => setShowIconThree(false)}
        />
      </DemoBlock>
      <DemoBlock title='圆角弹窗' card>
        <Cell title='圆角弹窗' isLink click={() => setShowRound(true)} />
        <Popup
          show={showRound}
          style={{ height: '30%' }}
          position='bottom'
          round
          close={() => setShowRound(false)}
        />
      </DemoBlock>
    </MobileLayout>
  )
}

export default PopupDemo
