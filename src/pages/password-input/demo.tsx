import React, { useCallback, useState } from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import PasswordInput from '@/components/PasswordInput'
import './index.scss'
import NumberKeyboard from '@/components/NumberKeyboard'
import { useWatch } from '@/components/composables'

type ValueKeys =
  | ''
  | 'basicUsage'
  | 'showInfo'
  | 'addGutter'
  | 'removeMask'
  | 'customLength'

type RefType = {
  showInfo: HTMLDivElement
  addGutter: HTMLDivElement
  basicUsage: HTMLDivElement
  removeMask: HTMLDivElement
  customLength: HTMLDivElement
}
const PasswordInputDemo = () => {
  const [value, setValue] = useState({
    showInfo: '123',
    addGutter: '123',
    basicUsage: '123',
    removeMask: '123',
    customLength: '123'
  })
  const [current, setCurrent] = useState<ValueKeys>('basicUsage')
  const [errorInfo, setErrorInfo] = useState('')

  const refMap: RefType = {
    showInfo: null,
    addGutter: null,
    basicUsage: null,
    removeMask: null,
    customLength: null
  }

  const onInput = (key: ValueKeys) => {
    const maxlegnth = current === 'customLength' ? 4 : 6
    const newValue = (value[current] + key).slice(0, maxlegnth)

    value[current] = newValue
    setValue({
      ...value
    })

    if (
      current === 'showInfo' &&
      newValue.length === 6 &&
      newValue !== '123456'
    ) {
      setErrorInfo('Password Mistake')
    }
  }

  const onDelete = () => {
    value[current] = value[current].slice(0, value[current].length - 1)
    setValue({
      ...value
    })
    if (current === 'showInfo') {
      setErrorInfo('')
    }
  }

  useWatch(current, (value) => {
    if (value) {
      const ele = refMap[value]
      if (ele) {
        const { top } = ele.getBoundingClientRect()
        window.scrollTo(0, window.pageYOffset + top)
      }
    }
  })

  return (
    <MobileLayout title='PasswordInput' className='demo-password-input'>
      <DemoBlock
        title='基础用法'
        ref={(ele) => {
          refMap.basicUsage = ele
        }}
      >
        <PasswordInput
          value={value.basicUsage}
          focused={current === 'basicUsage'}
          focus={useCallback(() => setCurrent('basicUsage'), [])}
        />
      </DemoBlock>
      <DemoBlock
        title='自定义长度'
        ref={(ele) => {
          refMap.customLength = ele
        }}
      >
        <PasswordInput
          value={value.customLength}
          length={4}
          focused={current === 'customLength'}
          focus={useCallback(() => setCurrent('customLength'), [])}
        />
      </DemoBlock>
      <DemoBlock
        title='格子间距'
        ref={(ele) => {
          refMap.addGutter = ele
        }}
      >
        <PasswordInput
          value={value.addGutter}
          gutter={10}
          focused={current === 'addGutter'}
          focus={useCallback(() => setCurrent('addGutter'), [])}
        />
      </DemoBlock>
      <DemoBlock
        title='明文展示'
        ref={(ele) => {
          refMap.removeMask = ele
        }}
      >
        <PasswordInput
          mask={false}
          value={value.removeMask}
          focused={current === 'removeMask'}
          focus={useCallback(() => setCurrent('removeMask'), [])}
        />
      </DemoBlock>
      <DemoBlock
        title='提示信息'
        ref={(ele) => {
          refMap.showInfo = ele
        }}
      >
        <PasswordInput
          info={'密码为 6 位数字'}
          value={value.showInfo}
          errorInfo={errorInfo}
          focused={current === 'showInfo'}
          focus={useCallback(() => setCurrent('showInfo'), [])}
        />
      </DemoBlock>
      <NumberKeyboard
        visible={!!current}
        blur={useCallback(() => setCurrent(''), [])}
        input={onInput}
        delete={onDelete}
      />
    </MobileLayout>
  )
}

export default PasswordInputDemo
