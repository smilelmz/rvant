import React, { useCallback, useMemo, useState } from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import Cascader from '@/components/Cascader'
import zhCNOptions from './area-zh-CN'
// import enUSOptions from './area-en-US'
import './index.scss'
import Field from '@/components/Field'
import {
  CascaderEventParams,
  CascaderOption
} from '@/components/Cascader/index.types'
import { Popup } from '@/components'
import { deepClone } from '@/components/utils'

const BaseUsage = () => {
  const [value, setValue] = useState('')
  const [show, setShow] = useState(false)
  const [result, setResult] = useState('')
  const onFinish = ({ value, selectedOptions }: CascaderEventParams) => {
    const result = selectedOptions
      .map((option) => option.text || option.name)
      .join('/')

    setShow(false)
    setValue(value)
    setResult(result)
  }
  return (
    <DemoBlock title='基本用法'>
      <Field
        value={result}
        isLink
        readonly
        label='地区'
        placeholder='请选择地区'
        click={useCallback(() => setShow(true), [])}
      />
      <Popup
        show={show}
        round
        teleport={true}
        position='bottom'
        close={() => setShow(false)}
      >
        <Cascader
          value={value}
          title='请选择地区'
          options={zhCNOptions}
          close={useCallback(() => setShow(false), [])}
          finish={onFinish}
        />
      </Popup>
    </DemoBlock>
  )
}

const CustomColor = () => {
  const [value, setValue] = useState('')
  const [show, setShow] = useState(false)
  const [result, setResult] = useState('')
  const onFinish = ({ value, selectedOptions }: CascaderEventParams) => {
    const result = selectedOptions
      .map((option) => option.text || option.name)
      .join('/')

    setShow(false)
    setValue(value)
    setResult(result)
  }
  return (
    <DemoBlock title='自定义颜色'>
      <Field
        value={result}
        isLink
        readonly
        label='地区'
        placeholder='请选择地区'
        click={useCallback(() => setShow(true), [])}
      />
      <Popup
        show={show}
        round
        teleport={true}
        position='bottom'
        close={() => setShow(false)}
      >
        <Cascader
          value={value}
          title='请选择地区'
          options={zhCNOptions}
          activeColor='#1989fa'
          close={useCallback(() => setShow(false), [])}
          finish={onFinish}
        />
      </Popup>
    </DemoBlock>
  )
}

const AsyncOptions = () => {
  const asyncOptions1 = [
    {
      text: '浙江省',
      value: '330000',
      children: []
    }
  ]
  const asyncOptions2 = [
    { text: '杭州市', value: '330100' },
    { text: '宁波市', value: '330200' }
  ]
  const [options, setOptions] = useState(asyncOptions1)
  const [value, setValue] = useState('')
  const [show, setShow] = useState(false)
  const [result, setResult] = useState('')
  const loadDynamicOptions = ({ value }: CascaderOption) => {
    setValue(value as string)
    if (value === '330000') {
      const newOptions = [...options]
      setTimeout(() => {
        newOptions[0].children = asyncOptions2
        setOptions(newOptions)
      }, 500)
    }
  }
  const onFinish = ({ value, selectedOptions }: CascaderEventParams) => {
    const result = selectedOptions
      .map((option) => option.text || option.name)
      .join('/')

    setShow(false)
    setValue(value)
    setResult(result)
  }
  return (
    <DemoBlock title='自定义字段名'>
      <Field
        value={result}
        isLink
        readonly
        label='地区'
        placeholder='请选择地区'
        click={useCallback(() => setShow(true), [])}
      />
      <Popup
        show={show}
        round
        teleport={true}
        position='bottom'
        close={() => setShow(false)}
      >
        <Cascader
          value={value}
          title='请选择地区'
          options={options}
          change={loadDynamicOptions}
          close={useCallback(() => setShow(false), [])}
          finish={onFinish}
        />
      </Popup>
    </DemoBlock>
  )
}

const CustomFieldNames = () => {
  const [value, setValue] = useState('')
  const [show, setShow] = useState(false)
  const [result, setResult] = useState('')
  const customFieldOptions = useMemo(() => {
    const options = deepClone(zhCNOptions)
    const adjustFieldName = (item: CascaderOption) => {
      if ('text' in item) {
        item.name = item.text
        delete item.text
      }
      if ('value' in item) {
        item.code = item.value
        delete item.value
      }
      if ('children' in item) {
        item.items = item.children
        delete item.children
        item.items.forEach(adjustFieldName)
      }
    }
    options.forEach(adjustFieldName)
    return options
  }, [])
  const onFinish = ({ value, selectedOptions }: CascaderEventParams) => {
    const result = selectedOptions
      .map((option) => option.text || option.name)
      .join('/')

    setShow(false)
    setValue(value)
    setResult(result)
  }
  return (
    <DemoBlock title='自定义字段名'>
      <Field
        value={result}
        isLink
        readonly
        label='地区'
        placeholder='请选择地区'
        click={useCallback(() => setShow(true), [])}
      />
      <Popup
        show={show}
        round
        teleport={true}
        position='bottom'
        close={() => setShow(false)}
      >
        <Cascader
          value={value}
          title='请选择地区'
          options={customFieldOptions}
          fieldNames={{
            text: 'name',
            value: 'code',
            children: 'items'
          }}
          close={useCallback(() => setShow(false), [])}
          finish={onFinish}
        />
      </Popup>
    </DemoBlock>
  )
}

const CascaderDemo = () => {
  return (
    <MobileLayout title='Cascader' className='demo-cascader'>
      <BaseUsage />
      <CustomColor />
      <AsyncOptions />
      <CustomFieldNames />
    </MobileLayout>
  )
}

export default CascaderDemo
