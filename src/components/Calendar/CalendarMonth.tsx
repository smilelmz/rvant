import React, { useMemo, useRef, useImperativeHandle } from 'react'
import { ValueFunction } from '@/components/type'
import { useI18n } from '@/components/locale'
import { addUnit, setScrollTop } from '../utils'
import { getMonthEndDay } from '../DatetimePicker/utils'
import {
  t,
  bem,
  compareDay,
  getPrevDay,
  getNextDay,
  formatMonthTitle
} from './utils'

import { useHeight } from '../composables'
import { DayItem, DayType, CalendarType, IHandles } from './types'
import CalendarDay from './CalendarDay'
import useToggle from '../composables/use-toggle'

interface IProps {
  type?: CalendarType
  color?: string
  showMark?: boolean
  rowHeight: number | string | undefined
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  formatter?: (item: DayItem) => DayItem
  currentDate?: Date | Date[] | null
  allowSameDay?: boolean
  showSubtitle?: boolean
  showMonthTitle?: boolean
  firstDayOfWeek?: number
  date: Date
  minDate: Date
  maxDate: Date
  click?: ValueFunction<DayItem>
}

const CalendarMonth = (
  {
    type,
    color,
    showMark,
    rowHeight,
    formatter,
    currentDate,
    allowSameDay,
    showSubtitle,
    showMonthTitle,
    firstDayOfWeek,
    date,
    minDate,
    maxDate,
    click
  }: IProps,
  ref: React.Ref<IHandles>
) => {
  const { messages } = useI18n()
  const [visible, { toggle }] = useToggle()
  const daysRef = useRef<HTMLDivElement>(null)
  const monthRef = useRef<HTMLDivElement>(null)
  const height = useHeight(monthRef)

  const title = useMemo(() => formatMonthTitle(messages, date), [date])
  const clacRowHeight = useMemo(() => addUnit(rowHeight), [rowHeight])
  const offset = useMemo(() => {
    const realDay = date.getDay()
    if (firstDayOfWeek) {
      return (realDay + 7 - firstDayOfWeek) % 7
    }
    return realDay
  }, [date, firstDayOfWeek])
  const totalDay = useMemo(
    () => getMonthEndDay(date.getFullYear(), date.getMonth() + 1),
    [date]
  )
  const shouldRender = useMemo(() => visible, [visible])
  const getTitle = () => title
  const scrollIntoView = (body: Element | null) => {
    if (!body) return
    const el = showSubtitle ? daysRef.current : monthRef.current
    const scrollTop =
      el!.getBoundingClientRect().top -
      body.getBoundingClientRect().top +
      body.scrollTop
    setScrollTop(body, scrollTop)
  }
  const getMultipleDayType = (day: Date) => {
    const curDate = Array.isArray(currentDate) ? currentDate : [currentDate]
    const isSelected = (date: Date) =>
      (curDate as Date[]).some((item) => compareDay(item, date) === 0)
    if (isSelected(day)) {
      const prevDay = getPrevDay(day)
      const nextDay = getNextDay(day)
      const prevSelected = isSelected(prevDay)
      const nextSelected = isSelected(nextDay)
      if (prevSelected && nextSelected) {
        return 'multiple-middle'
      }
      if (prevSelected) {
        return 'end'
      }
      if (nextSelected) {
        return 'start'
      }
      return 'multiple-selected'
    }
    return ''
  }
  const getRangeDayType = (day: Date) => {
    const curDate = Array.isArray(currentDate) ? currentDate : [currentDate]
    const [startDay, endDay] = curDate
    if (!startDay) {
      return ''
    }
    const compareToStart = compareDay(day, startDay)
    if (!endDay) {
      return compareToStart === 0 ? 'start' : ''
    }
    const compareToEnd = compareDay(day, endDay)
    if (allowSameDay && compareToStart === 0 && compareToEnd === 0) {
      return 'start-end'
    }
    if (compareToStart === 0) {
      return 'start'
    }
    if (compareToEnd === 0) {
      return 'end'
    }
    if (compareToStart > 0 && compareToEnd < 0) {
      return 'middle'
    }
    return ''
  }
  const getDayType = (day: Date): DayType => {
    if (compareDay(day, minDate) < 0 || compareDay(day, maxDate) > 0) {
      return 'disabled'
    }
    if (type === 'multiple') {
      return getMultipleDayType(day)
    }
    if (type === 'range') {
      return getRangeDayType(day)
    }
    if (type === 'single') {
      if (Array.isArray(currentDate)) return ''
      return compareDay(day, currentDate as Date) === 0 ? 'selected' : ''
    }
    return ''
  }
  const getBottomInfo = (dayType: DayType) => {
    if (type === 'range') {
      if (dayType === 'start' || dayType === 'end') {
        return t(messages, dayType)
      }
      if (dayType === 'start-end') {
        return t(messages, 'startEnd')
      }
    }
  }
  const renderTitle = () => {
    if (showMonthTitle) {
      return <div className={bem('month-title')}>{title}</div>
    }
  }
  const renderMark = () => {
    if (showMark && shouldRender) {
      return <div className={bem('month-mark')}>{date.getMonth() + 1}</div>
    }
  }
  const placeholders = useMemo<DayItem[]>(() => {
    const count = Math.ceil((totalDay + offset) / 7)
    return Array(count).fill({ type: 'placeholder' })
  }, [])
  const days = useMemo(() => {
    const daysList: DayItem[] = []
    const year = date.getFullYear()
    const month = date.getMonth()
    for (let day = 1; day <= totalDay; day++) {
      const date = new Date(year, month, day)
      const type = getDayType(date)
      let config: DayItem = {
        date,
        type,
        text: day,
        bottomInfo: getBottomInfo(type)
      }
      if (formatter) {
        config = formatter(config)
      }
      daysList.push(config)
    }
    return daysList
  }, [date, formatter, type, currentDate])
  const renderDay = (item: DayItem, index: number) => (
    <CalendarDay
      key={index}
      item={item}
      index={index}
      color={color}
      offset={offset}
      rowHeight={clacRowHeight}
      click={(item: DayItem) => {
        click && click(item)
      }}
    />
  )
  const renderDays = () => {
    return (
      <div ref={daysRef} role='grid' className={bem('days')}>
        {renderMark()}
        {(shouldRender ? days : placeholders).map(renderDay)}
      </div>
    )
  }
  useImperativeHandle(ref, () => ({
    showed: false,
    date,
    getTitle,
    getHeight: () => height.current,
    setVisible: toggle,
    scrollIntoView
  }))
  return (
    <div className={bem('month')} ref={monthRef}>
      {renderTitle()}
      {renderDays()}
    </div>
  )
}
export default React.memo(React.forwardRef(CalendarMonth))
