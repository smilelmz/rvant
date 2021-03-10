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
        day.topInfo = t('laborDay')
      } else if (date === 4) {
        day.topInfo = t('youthDay')
      } else if (date === 11) {
        day.text = t('today')
      }
    }

    if (day.type === 'start') {
      day.bottomInfo = t('in')
    } else if (day.type === 'end') {
      day.bottomInfo = t('out')
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
        settings.confirmText = t('confirmText')
        settings.confirmDisabledText = t('confirmDisabledText')
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
  const calendarProps = {
    show,
    ...calendarSetting,
    close: () => setShow(false),
    confirm: onConfirm
  }
  console.log(calendarProps)
  return (
    <MobileLayout title='Calendar' className='demo-calendar'>
      <DemoBlock title='基础用法' card>
        <Cell
          title='选择单个日期'
          isLink
          click={() => showCalendar('single', 'selectSingle')}
        />
        <Cell
          title='选择多个日期'
          isLink
          click={() => showCalendar('multiple', 'selectMultiple')}
        />
        <Cell
          title='选择日期区间'
          isLink
          click={() => showCalendar('range', 'selectRange')}
        />
      </DemoBlock>
      <DemoBlock title='快捷选择' card>
        <Cell
          title='选择单个日期'
          isLink
          click={() => showCalendar('single', 'quickSelect1')}
        />
        <Cell
          title='选择多个日期'
          isLink
          click={() => showCalendar('range', 'quickSelect2')}
        />
      </DemoBlock>
      <DemoBlock title='自定义日历' card>
        <Cell
          title='自定义颜色'
          isLink
          click={() => showCalendar('range', 'customColor')}
        />
        <Cell
          title='自定义日期范围'
          isLink
          click={() => showCalendar('single', 'customRange')}
        />
        <Cell
          title='自定义按钮文字'
          isLink
          click={() => showCalendar('range', 'customConfirm')}
        />
        <Cell
          title='自定义日期文案'
          isLink
          click={() => showCalendar('range', 'customDayText')}
        />
        <Cell
          title='自定义弹出位置'
          isLink
          click={() => showCalendar('single', 'customPosition')}
        />
        <Cell
          title='日期区间最大范围'
          isLink
          click={() => showCalendar('range', 'maxRange')}
        />
        <Cell
          title='自定义周起始日'
          isLink
          click={() => showCalendar('single', 'firstDayOfWeek')}
        />
      </DemoBlock>
      <Calendar {...calendarProps} />
    </MobileLayout>
  )
}

export default CalendarDemo
