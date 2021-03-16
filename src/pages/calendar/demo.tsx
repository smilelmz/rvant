import React, { useState } from 'react'
import { MobileLayout, DemoBlock } from '@/doc'
import Calendar from '@/components/Calendar'
import Cell from '@/components/Cell'
import './index.scss'

type DayType =
  | ''
  | 'start'
  | 'start-end'
  | 'middle'
  | 'end'
  | 'selected'
  | 'multiple-middle'
  | 'multiple-selected'
  | 'disabled'
  | 'placeholder'

type DayItem = {
  date?: Date
  text?: string | number | React.ReactNode | React.ReactNode[]
  type?: DayType
  topInfo?: string
  className?: string
  bottomInfo?: string
}
const CalendarDemo = () => {
  const [selectDate, setSelectDate] = useState({
    maxRange: [],
    selectSingle: null,
    selectRange: [],
    selectMultiple: [],
    quickSelect1: null,
    quickSelect2: [],
    customColor: [],
    customConfirm: [],
    customRange: null,
    customDayText: [],
    customPosition: null
  })
  const [show, setShow] = useState(false)
  const [calendarSetting, setCalendarSetting] = useState<Record<string, any>>(
    {}
  )
  const dayFormatter = (day: DayItem) => {
    if (!day.date) {
      return day
    }

    const month = day.date.getMonth() + 1
    const date = day.date.getDate()

    if (month === 5) {
      if (date === 1) {
        day.topInfo = '劳动节'
      } else if (date === 4) {
        day.topInfo = '青年节'
      } else if (date === 11) {
        day.text = '今天'
      }
    }

    if (day.type === 'start') {
      day.bottomInfo = '入店'
    } else if (day.type === 'end') {
      day.bottomInfo = '离店'
    }

    return day
  }
  const showCalendar = (type: string, id: string) => {
    const settings: Record<string, any> = {
      round: true,
      firstDayOfWeek: 0,
      showConfirm: true
    }
    settings.id = id
    settings.type = type
    switch (id) {
      case 'quickSelect1':
      case 'quickSelect2':
        settings.showConfirm = false
        break
      case 'customColor':
        settings.color = '#1989fa'
        break
      case 'customConfirm':
        settings.confirmText = `完成`
        settings.confirmDisabledText = '请选择结束时间'
        break
      case 'customRange':
        settings.minDate = new Date(2010, 0, 1)
        settings.maxDate = new Date(2010, 0, 31)
        break
      case 'customDayText':
        settings.minDate = new Date(2010, 4, 1)
        settings.maxDate = new Date(2010, 4, 31)
        settings.formatter = dayFormatter
        break
      case 'customPosition':
        settings.round = false
        settings.position = 'right'
        break
      case 'maxRange':
        settings.maxRange = 3
        break
      case 'firstDayOfWeek':
        settings.firstDayOfWeek = 1
        break
      default:
    }
    setCalendarSetting(settings)
    setShow(true)
  }
  const onConfirm = (date: Date | Date[]) => {
    selectDate[calendarSetting.id] = date
    setSelectDate(selectDate)
    setShow(false)
  }
  const formatDate = (date: Date) => {
    if (date) {
      return `${date.getMonth() + 1}/${date.getDate()}`
    }
  }

  const formatFullDate = (date: Date) => {
    if (date) {
      return `${date.getFullYear()}/${formatDate(date)}`
    }
  }

  const formatMultiple = (dates: Date[]) => {
    if (dates.length) {
      return `选择了 ${dates.length} 个日期`
    }
  }

  const formatRange = (dateRange: Date[]) => {
    if (dateRange.length) {
      const [start, end] = dateRange
      return `${formatDate(start)} - ${formatDate(end)}`
    }
  }
  const calendarProps = {
    show,
    ...calendarSetting,
    close: () => setShow(false),
    confirm: onConfirm
  }
  return (
    <MobileLayout title='Calendar' className='demo-calendar'>
      <DemoBlock title='基础用法' card>
        <Cell
          title='选择单个日期'
          isLink
          value={
            selectDate.selectSingle
              ? formatFullDate((selectDate.selectSingle as unknown) as Date)
              : ''
          }
          click={() => showCalendar('single', 'selectSingle')}
        />
        <Cell
          title='选择多个日期'
          isLink
          value={formatMultiple(selectDate.selectMultiple)}
          click={() => showCalendar('multiple', 'selectMultiple')}
        />
        <Cell
          title='选择日期区间'
          isLink
          value={formatRange(selectDate.selectRange)}
          click={() => showCalendar('range', 'selectRange')}
        />
      </DemoBlock>
      <DemoBlock title='快捷选择' card>
        <Cell
          title='选择单个日期'
          isLink
          value={
            selectDate.quickSelect1
              ? formatFullDate((selectDate.quickSelect1 as unknown) as Date)
              : ''
          }
          click={() => showCalendar('single', 'quickSelect1')}
        />
        <Cell
          title='选择多个日期'
          isLink
          value={formatRange(selectDate.quickSelect2)}
          click={() => showCalendar('range', 'quickSelect2')}
        />
      </DemoBlock>
      <DemoBlock title='自定义日历' card>
        <Cell
          title='自定义颜色'
          isLink
          value={formatRange(selectDate.customColor)}
          click={() => showCalendar('range', 'customColor')}
        />
        <Cell
          title='自定义日期范围'
          isLink
          value={
            selectDate.customRange
              ? formatFullDate((selectDate.customRange as unknown) as Date)
              : ''
          }
          click={() => showCalendar('single', 'customRange')}
        />
        <Cell
          title='自定义按钮文字'
          isLink
          value={formatRange(selectDate.customConfirm)}
          click={() => showCalendar('range', 'customConfirm')}
        />
        <Cell
          title='自定义日期文案'
          isLink
          value={formatRange(selectDate.customDayText)}
          click={() => showCalendar('range', 'customDayText')}
        />
        <Cell
          title='自定义弹出位置'
          isLink
          value={
            selectDate.customPosition
              ? formatFullDate((selectDate.customPosition as unknown) as Date)
              : ''
          }
          click={() => showCalendar('single', 'customPosition')}
        />
        <Cell
          title='日期区间最大范围'
          isLink
          value={formatRange(selectDate.maxRange)}
          click={() => showCalendar('range', 'maxRange')}
        />
        <Cell
          title='自定义周起始日'
          isLink
          click={() => showCalendar('single', 'firstDayOfWeek')}
        />
      </DemoBlock>
      <DemoBlock title='平铺展示' card>
        <Calendar
          title='日历'
          poppable={false}
          showConfirm={false}
          minDate={new Date(2012, 0, 10)}
          maxDate={new Date(2012, 2, 20)}
          defaultDate={new Date(2012, 0, 10)}
          style={{ height: 500 }}
        />
      </DemoBlock>
      <Calendar {...calendarProps} />
    </MobileLayout>
  )
}

export default CalendarDemo
