import React, { useState } from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'
import { BASE_PREFIX } from '@/components/utils/constant'
import Cell from '@/components/Cell'
import { MobileLayout, DemoBlock } from '@/doc'
import './index.scss'

const StyleDemo = () => {
  const [show, setShow] = useState(false)
  const [transitionName, setTransitionName] = useState('')

  const animate = (name: string) => {
    setShow(true)
    setTransitionName(name)
    setTimeout(() => {
      setShow(false)
    }, 500)
  }

  return (
    <MobileLayout title='Style' className='demo-style'>
      <DemoBlock title='文字省略'>
        <div className={`${BASE_PREFIX}ellipsis`}>
          这是一段最多显示两行的文字，多余的内容会被省略
        </div>
        <div className={`${BASE_PREFIX}ellipsis--l2`}>
          这是一段最多显示两行的文字，多余的内容会被省略；这是一段最多显示两行的文字，多余的内容会被省略；这是一段最多显示两行的文字，多余的内容会被省略
        </div>
        <div className={`${BASE_PREFIX}ellipsis--l3`}>
          这是一段最多显示三行的文字，多余的内容会被省略；这是一段最多显示三行的文字，多余的内容会被省略；这是一段最多显示三行的文字，多余的内容会被省略；这是一段最多显示三行的文字，多余的内容会被省略
        </div>
      </DemoBlock>
      <DemoBlock card title='1px 边框'>
        <div className={`${BASE_PREFIX}hairline--top`} />
      </DemoBlock>
      <DemoBlock title='动画' card>
        <Cell title='Fade' isLink click={() => animate(`${BASE_PREFIX}fade`)} />
        <Cell
          title='Slide Up'
          isLink
          click={() => animate(`${BASE_PREFIX}slide-up`)}
        />
        <Cell
          title='Slide Down'
          isLink
          click={() => animate(`${BASE_PREFIX}slide-down`)}
        />
        <Cell
          title='Slide Left'
          isLink
          click={() => animate(`${BASE_PREFIX}slide-left`)}
        />
        <Cell
          title='Slide Right'
          isLink
          click={() => animate(`${BASE_PREFIX}slide-right`)}
        />
      </DemoBlock>
      <CSSTransition
        in={show}
        classNames={transitionName}
        timeout={300}
        unmountOnExit
      >
        <div className='demo-animate-block' />
      </CSSTransition>
    </MobileLayout>
  )
}

export default StyleDemo
