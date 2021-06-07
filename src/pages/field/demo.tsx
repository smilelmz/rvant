import React, { useCallback, useState } from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import Field from '@/components/Field'
import CellGroup from '@/components/CellGroup'
import './index.scss'
import Button from '@/components/Button'

const BaseUsage = () => {
  const [value, setValue] = useState('')
  return (
    <DemoBlock title='基本用法'>
      <CellGroup>
        <Field
          value={value}
          label='文本'
          placeholder='请输入文本'
          change={useCallback((v) => setValue(v), [])}
        />
      </CellGroup>
    </DemoBlock>
  )
}

const CustomType = () => {
  const [text, setText] = useState('')
  const [phone, setPhone] = useState('')
  const [digit, setDigit] = useState('')
  const [number, setNumber] = useState('')
  const [password, setPassword] = useState('')

  return (
    <DemoBlock title='自定义类型'>
      <Field
        value={text}
        label='文本'
        placeholder='请输入文本'
        change={(v) => setText(v)}
      />
      <Field
        value={phone}
        type='tel'
        label='手机号'
        placeholder='请输入手机号'
        change={useCallback((v) => setPhone(v), [])}
      />
      <Field
        value={digit}
        type='digit'
        label='整数'
        placeholder='请输入整数'
        change={useCallback((v) => setDigit(v), [])}
      />
      <Field
        value={number}
        type='number'
        label='数字'
        placeholder='请输入数字（支持小数）'
        change={useCallback((v) => setNumber(v), [])}
      />
      <Field
        value={password}
        type='password'
        label='密码'
        placeholder='请输入密码'
        change={useCallback((v) => setPassword(v), [])}
      />
    </DemoBlock>
  )
}

const Disabled = () => {
  return (
    <DemoBlock title='禁用输入框'>
      <CellGroup>
        <Field value={'输入框只读'} label='文本' readonly />
        <Field value={'输入框只读'} label='文本' disabled />
      </CellGroup>
    </DemoBlock>
  )
}

const ShowIcon = () => {
  const [icon1, setIcon1] = useState('')
  const [icon2, setIcon2] = useState('123')
  return (
    <DemoBlock title='显示图标'>
      <CellGroup>
        <Field
          value={icon1}
          label='文本'
          leftIcon='smile-o'
          rightIcon='warning-o'
          placeholder='显示图标'
          change={useCallback((v) => setIcon1(v), [])}
        />
        <Field
          value={icon2}
          clearable
          label='文本'
          leftIcon='music-o'
          placeholder='显示清除图标'
          change={useCallback((v) => setIcon2(v), [])}
        />
      </CellGroup>
    </DemoBlock>
  )
}

const ErrorInfo = () => {
  const [phone, setPhone] = useState('')
  const [username, setUsername] = useState('')
  return (
    <DemoBlock title='错误提示'>
      <CellGroup>
        <Field
          value={username}
          error
          required
          label='用户名'
          placeholder='请输入用户名'
          change={useCallback((v) => setUsername(v), [])}
        />
        <Field
          required
          value={phone}
          label='手机号'
          placeholder='请输入手机号'
          errorMessage='手机号格式错误'
          change={useCallback((v) => setPhone(v), [])}
        />
      </CellGroup>
    </DemoBlock>
  )
}

const InsertButton = () => {
  const [sms, setSms] = useState('')
  return (
    <DemoBlock title='插入按钮'>
      <Field
        value={sms}
        center
        clearable
        label='短信验证码'
        placeholder='请输入短信验证码'
        button={
          <Button size='small' type='primary'>
            发送验证码
          </Button>
        }
        change={useCallback((v) => setSms(v), [])}
      />
    </DemoBlock>
  )
}

const FormatValue = () => {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const formatter = (value: string) => value.replace(/\d/g, '')
  return (
    <DemoBlock title='格式化输入内容'>
      <Field
        value={value1}
        label='文本'
        placeholder='在输入时执行格式化'
        formatter={formatter}
        change={useCallback((v) => setValue1(v), [])}
      />
      <Field
        value={value2}
        label='文本'
        placeholder='在失焦时执行格式化'
        formatTrigger='onBlur'
        formatter={formatter}
        change={useCallback((v) => setValue2(v), [])}
      />
    </DemoBlock>
  )
}

const AutoSize = () => {
  const [value, setValue] = useState('')
  return (
    <DemoBlock title='高度自适应'>
      <Field
        value={value}
        autosize
        rows='1'
        type='textarea'
        label='留言'
        placeholder='请输入留言'
        change={useCallback((v) => setValue(v), [])}
      />
    </DemoBlock>
  )
}

const ShowWordLimit = () => {
  const [value, setValue] = useState('')
  return (
    <DemoBlock title='显示字数统计'>
      <CellGroup>
        <Field
          value={value}
          autosize
          showWordLimit
          rows='2'
          type='textarea'
          maxlength='50'
          label='留言'
          placeholder='请输入留言'
          change={useCallback((v) => setValue(v), [])}
        />
      </CellGroup>
    </DemoBlock>
  )
}

const InputAlign = () => {
  const [value, setValue] = useState('')
  return (
    <DemoBlock title='输入框内容对齐'>
      <CellGroup>
        <Field
          value={value}
          label='文本'
          inputAlign='right'
          placeholder='输入框内容右对齐'
          change={useCallback((v) => setValue(v), [])}
        />
      </CellGroup>
    </DemoBlock>
  )
}

const FieldDemo = () => {
  return (
    <MobileLayout title='Field' className='demo-field'>
      <BaseUsage />
      <CustomType />·
      <Disabled />
      <ShowIcon />
      <ErrorInfo />
      <InsertButton />
      <FormatValue />
      <AutoSize />
      <ShowWordLimit />
      <InputAlign />
    </MobileLayout>
  )
}

export default FieldDemo
