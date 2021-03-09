import React from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import DatetimePicker from '@/components/DatetimePicker'
import './index.scss'

const DatetimePickerDemo = () => {
  return (
    <MobileLayout title='DatetimePicker' className='demo-datetimepicker'>
      <DemoBlock title='demo1'>
        <DatetimePicker />
      </DemoBlock>
    </MobileLayout>
  )
}

export default DatetimePickerDemo
