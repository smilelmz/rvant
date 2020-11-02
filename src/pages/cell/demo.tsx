/* eslint-disable import/no-unresolved */
import React from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import Cell from '@/components/Cell'
import CellGroup from '@/components/CellGroup'
import Icon from '@/components/Icon'
import './index.scss'

const CellDemo = () => {
  return (
    <MobileLayout title='Cell' className='demo-cell'>
      <DemoBlock title='基础用法'>
        <CellGroup>
          <Cell title='单元格' value='内容' />
          <Cell title='单元格' value='内容' label='描述信息' />
        </CellGroup>
      </DemoBlock>
      <DemoBlock title='单元格大小'>
        <Cell title='单元格' value='内容' size='large' />
        <Cell title='单元格' value='内容' label='描述信息' size='large' />
      </DemoBlock>
      <DemoBlock title='展示图标'>
        <Cell title='单元格' value='内容' icon='location-o' />
      </DemoBlock>
      <DemoBlock title='只设置 value'>
        <Cell value='内容' />
      </DemoBlock>
      <DemoBlock title='单元格图标'>
        <Cell title='单元格' isLink />
        <Cell title='单元格' value='内容' isLink />
        <Cell title='单元格' value='内容' isLink arrowDirection='down' />
      </DemoBlock>
      <DemoBlock title='单元格导航'>
        <Cell title='URL 跳转' isLink url='https://www.baidu.com' />
        <Cell title='URL 跳转' isLink url='https://www.baidu.com' replace />
      </DemoBlock>
      <DemoBlock title='分组标题'>
        <CellGroup title='分组1'>
          <Cell title='单元格' value='内容' />
        </CellGroup>
        <CellGroup title='分组2'>
          <Cell title='单元格' value='内容' />
        </CellGroup>
      </DemoBlock>
      <DemoBlock title='居中'>
        <Cell center title='单元格' value='内容' label='描述信息' />
      </DemoBlock>
      <DemoBlock title='自定义'>
        <Cell
          title={[
            <span className='custom-title' key='1'>
              单元格
            </span>
          ]}
        />
        <Cell
          title='单元格'
          icon='shop-o'
          value={<Icon name='search' className='search-icon' />}
        />
      </DemoBlock>
    </MobileLayout>
  )
}

export default CellDemo
