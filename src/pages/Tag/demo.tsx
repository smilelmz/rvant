import React, { useState } from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import { Tag, Cell } from '@/components'
import './index.scss'

const TagDemo = () => {
  const [show, setShow] = useState(true)
  return (
    <MobileLayout title='Tag' className='demo-tag'>
      <DemoBlock title='基础用法' card>
        <Cell title='primary 类型' value={<Tag type='primary'>标签</Tag>} />
        <Cell title='success 类型' value={<Tag type='success'>标签</Tag>} />
        <Cell title='danger 类型' value={<Tag type='danger'>标签</Tag>} />
        <Cell title='warning 类型' value={<Tag type='warning'>标签</Tag>} />
      </DemoBlock>
      <DemoBlock title='样式风格' card>
        <Cell title='空心样式' value={<Tag>标签</Tag>} />
        <Cell
          title='圆角样式'
          value={
            <Tag type='primary' round>
              标签
            </Tag>
          }
        />
        <Cell
          title='标记样式'
          value={
            <Tag type='primary' mark>
              标签
            </Tag>
          }
        />
        <Cell
          title='可关闭标签'
          value={
            <Tag
              closeable
              show={show}
              size='medium'
              type='primary'
              close={() => setShow(false)}
            >
              标签
            </Tag>
          }
        />
      </DemoBlock>
      <DemoBlock title='标签大小' card>
        <Cell title='小号标签' value={<Tag type='primary'>标签</Tag>} />
        <Cell
          title='中号标签'
          value={
            <Tag type='primary' size='medium'>
              标签
            </Tag>
          }
        />
        <Cell
          title='大号标签'
          value={
            <Tag type='primary' size='large'>
              标签
            </Tag>
          }
        />
      </DemoBlock>
      <DemoBlock title='自定义颜色' card>
        <Cell title='背景颜色' value={<Tag color='#7232dd'>标签</Tag>} />
        <Cell
          title='文字颜色'
          value={
            <Tag color='#ffe1e1' textColor='#ad0000'>
              标签
            </Tag>
          }
        />
        <Cell
          title='空心颜色'
          value={
            <Tag color='#7232dd' plain>
              标签
            </Tag>
          }
        />
      </DemoBlock>
    </MobileLayout>
  )
}

export default TagDemo
