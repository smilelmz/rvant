import React, { useState } from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import Cell from '@/components/Cell'
import ShareSheet from '@/components/ShareSheet'
import { ShareSheetOption } from '@/components/ShareSheet/types'
import { Toast } from '@/components'
import './index.scss'

const ShareSheetDemo = () => {
  const [basic, setBasic] = useState(false)
  const [withDesc, setWithDesc] = useState(false)
  const [multiLine, setMultiLine] = useState(false)
  const [customIcon, setCustomIcon] = useState(false)
  const onSelect = (option: ShareSheetOption) => {
    Toast.info(option.name)
    setBasic(false)
    setWithDesc(false)
    setMultiLine(false)
    setCustomIcon(false)
  }
  return (
    <MobileLayout title='ShareSheet' className='demo-share-sheet'>
      <DemoBlock card title='基本用法'>
        <Cell isLink title='显示分享面板' click={() => setBasic(true)} />
        <ShareSheet
          show={basic}
          title='立即分享给好友'
          options={[
            { name: '微信', icon: 'wechat' },
            { name: '微博', icon: 'weibo' },
            { name: '复制链接', icon: 'link' },
            { name: '分享海报', icon: 'poster' },
            { name: '二维码', icon: 'qrcode' }
          ]}
          cancel={() => setBasic(false)}
          select={onSelect}
        />
      </DemoBlock>
      <DemoBlock card title='展示多行选项'>
        <Cell isLink title='显示分享面板' click={() => setMultiLine(true)} />
        <ShareSheet
          show={multiLine}
          title='立即分享给好友'
          options={[
            [
              { name: '微信', icon: 'wechat' },
              { name: '朋友圈', icon: 'wechat-moments' },
              { name: '微博', icon: 'weibo' },
              { name: 'QQ', icon: 'qq' }
            ],
            [
              { name: '复制链接', icon: 'link' },
              { name: '分享海报', icon: 'poster' },
              { name: '二维码', icon: 'qrcode' },
              { name: '小程序码', icon: 'weapp-qrcode' }
            ]
          ]}
          cancel={() => setMultiLine(false)}
          select={onSelect}
        />
      </DemoBlock>
      <DemoBlock card title='自定义图标'>
        <Cell isLink title='显示分享面板' click={() => setCustomIcon(true)} />
        <ShareSheet
          show={customIcon}
          title='立即分享给好友'
          options={[
            {
              name: '名称',
              icon: 'https://img.yzcdn.cn/vant/custom-icon-fire.png'
            },
            {
              name: '名称',
              icon: 'https://img.yzcdn.cn/vant/custom-icon-light.png'
            },
            {
              name: '名称',
              icon: 'https://img.yzcdn.cn/vant/custom-icon-water.png'
            }
          ]}
          cancel={() => setCustomIcon(false)}
          select={onSelect}
        />
      </DemoBlock>
      <DemoBlock card title='展示描述信息'>
        <Cell isLink title='显示分享面板' click={() => setWithDesc(true)} />
        <ShareSheet
          show={withDesc}
          title='立即分享给好友'
          options={[
            { name: '微信', icon: 'wechat' },
            { name: '微博', icon: 'weibo' },
            {
              name: '复制链接',
              icon: 'link',
              description: '描述信息'
            },
            { name: '分享海报', icon: 'poster' },
            { name: '二维码', icon: 'qrcode' }
          ]}
          cancel={() => setWithDesc(false)}
          select={onSelect}
        />
      </DemoBlock>
    </MobileLayout>
  )
}

export default ShareSheetDemo
