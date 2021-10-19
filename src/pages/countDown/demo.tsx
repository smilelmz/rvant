import React, { useRef } from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import { CountDownHandler } from '@/components/CountDown/types'
import CountDown from '@/components/CountDown'
import Toast from '@/components/Toast'
import Button from '@/components/Button'
import './index.scss'

const CountDownDemo = () => {
  const time = 30 * 60 * 60 * 1000
  const countDownRef = useRef<CountDownHandler>(null)
  const start = () => {
    countDownRef.current?.start()
  }
  const pause = () => {
    countDownRef.current?.pause()
  }
  const reset = () => {
    countDownRef.current?.reset()
  }
  const onFinish = () => Toast.info('倒计时结束')
  return (
    <MobileLayout title='CountDown' className='demo-countdown'>
      <DemoBlock title='基础用法'>
        <CountDown time={time} />
      </DemoBlock>
      <DemoBlock title='自定义格式'>
        <CountDown time={time} format='DD 天 HH 时 mm 分 ss 秒' />
      </DemoBlock>
      <DemoBlock title='毫秒级渲染'>
        <CountDown time={time} millisecond format='HH:mm:ss:SS' />
      </DemoBlock>
      <DemoBlock title='自定义样式'>
        <CountDown
          time={time}
          millisecond
          format='HH:mm:ss:SS'
          customRender={(currentTime) => {
            return (
              <div>
                <span className='block'>{currentTime.hours}</span>
                <span className='colon'>:</span>
                <span className='block'>{currentTime.minutes}</span>
                <span className='colon'>:</span>
                <span className='block'>{currentTime.seconds}</span>
              </div>
            )
          }}
        />
      </DemoBlock>
      <DemoBlock title='手动控制'>
        <CountDown
          ref={countDownRef}
          time={3000}
          millisecond
          autoStart={false}
          format='ss:SSS'
          finish={onFinish}
        />
      </DemoBlock>
      <div className='demo-countdown-buttons'>
        <Button type='primary' click={start}>
          开始
        </Button>
        <Button type='info' click={pause}>
          暂停
        </Button>
        <Button type='danger' click={reset}>
          重置
        </Button>
      </div>
    </MobileLayout>
  )
}

export default CountDownDemo
