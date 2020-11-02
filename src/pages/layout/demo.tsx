import React from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import Row from '@/components/Row'
import Col from '@/components/Col'
import './index.scss'

const LayoutDemo = () => {
  return (
    <MobileLayout title='Layout' className='demo-layout'>
      <DemoBlock title='基础用法'>
        <Row>
          <Col span='8'>span: 8</Col>
          <Col span='8'>span: 8</Col>
          <Col span='8'>span: 8</Col>
        </Row>
        <Row>
          <Col span='4'>span: 4</Col>
          <Col span='10' offset='4'>
            offset: 4, span: 10
          </Col>
        </Row>

        <Row>
          <Col offset='12' span='12'>
            offset: 12, span: 12
          </Col>
        </Row>
      </DemoBlock>
      <DemoBlock title='设置列元素间距'>
        <Row gutter='20'>
          <Col span='8'>span: 8</Col>
          <Col span='8'>span: 8</Col>
          <Col span='8'>span: 8</Col>
        </Row>
      </DemoBlock>
      <DemoBlock title='Flex 布局'>
        <Row type='flex'>
          <Col span='6'>span: 6</Col>
          <Col span='6'>span: 6</Col>
          <Col span='6'>span: 6</Col>
        </Row>

        <Row type='flex' justify='center'>
          <Col span='6'>span: 6</Col>
          <Col span='6'>span: 6</Col>
          <Col span='6'>span: 6</Col>
        </Row>

        <Row type='flex' justify='end'>
          <Col span='6'>span: 6</Col>
          <Col span='6'>span: 6</Col>
          <Col span='6'>span: 6</Col>
        </Row>

        <Row type='flex' justify='space-between'>
          <Col span='6'>span: 6</Col>
          <Col span='6'>span: 6</Col>
          <Col span='6'>span: 6</Col>
        </Row>

        <Row type='flex' justify='space-around'>
          <Col span='6'>span: 6</Col>
          <Col span='6'>span: 6</Col>
          <Col span='6'>span: 6</Col>
        </Row>
      </DemoBlock>
    </MobileLayout>
  )
}

export default LayoutDemo
