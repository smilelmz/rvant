import React, { useState } from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import Stepper from '@/components/Stepper'
import Cell from '@/components/Cell'
import Toast from '@/components/Toast'
import './index.scss'
import { Interceptor } from '@/components/utils'

const StepperDemo = () => {
  const [stepper1, setStepper1] = useState<number | string | undefined>(1)
  const [stepper2, setStepper2] = useState<number | string | undefined>(1)
  const [stepper3, setStepper3] = useState<number | string | undefined>(1)
  const [stepper4, setStepper4] = useState<number | string | undefined>(1)
  const [stepper5, setStepper5] = useState<number | string | undefined>(1)
  const [stepper6, setStepper6] = useState<number | string | undefined>(1)
  const [stepper7, setStepper7] = useState<number | string | undefined>(1)
  const [stepper8, setStepper8] = useState<number | string | undefined>(1)
  const [stepper9, setStepper9] = useState<number | string | undefined>(1)
  const [stepper10, setStepper10] = useState<number | string | undefined>(1)
  const beforeChange = () => {
    Toast.loading({ message: '加载中...' })

    return new Promise((resolve) => {
      setTimeout(() => {
        Toast.hide()
        resolve(true)
      }, 500)
    })
  }
  return (
    <MobileLayout title='Stepper' className='demo-stepper'>
      <DemoBlock card>
        <Cell title='基本用法' center>
          <Stepper value={stepper1} change={(v) => setStepper1(v)} />
        </Cell>
        <Cell title='步长设置' center>
          <Stepper value={stepper2} step={2} change={(v) => setStepper2(v)} />
        </Cell>
        <Cell title='限制输入范围' center>
          <Stepper
            value={stepper3}
            min={5}
            max={8}
            change={(v) => setStepper3(v)}
          />
        </Cell>
        <Cell title='限制输入整数' center>
          <Stepper value={stepper4} integer change={(v) => setStepper4(v)} />
        </Cell>
        <Cell title='禁用状态' center>
          <Stepper disabled value={stepper5} change={(v) => setStepper5(v)} />
        </Cell>
        <Cell title='禁用输入框' center>
          <Stepper
            value={stepper9}
            disableInput
            change={(v) => setStepper9(v)}
          />
        </Cell>
        <Cell title='固定小数位数' center>
          <Stepper
            value={stepper8}
            step={0.2}
            decimalLength={1}
            change={(v) => setStepper8(v)}
          />
        </Cell>
        <Cell title='自定义大小' center>
          <Stepper
            value={stepper7}
            buttonSize='32px'
            inputWidth='40px'
            change={(v) => setStepper7(v)}
          />
        </Cell>
        <Cell title='异步变更' center>
          <Stepper
            value={stepper6}
            beforeChange={beforeChange as Interceptor}
            change={(v) => setStepper6(v)}
          />
        </Cell>
        <Cell title='圆角风格' center>
          <Stepper
            value={stepper10}
            theme='round'
            buttonSize={22}
            disableInput
            change={(v) => setStepper10(v)}
          />
        </Cell>
      </DemoBlock>
    </MobileLayout>
  )
}

export default StepperDemo
