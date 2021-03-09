import React from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import Calendar from '@/components/Calendar'
import { createNamespace } from '../../utils'
import './index.scss'

const [bem, t] = createNamespace('calendar')
const CalendarDemo = () => {
  return (
    <MobileLayout title='Calendar' className='demo-calendar'>
      <DemoBlock title='demo1'>
        <Calendar />
      </DemoBlock>
    </MobileLayout>
  )
}

export default CalendarDemo
