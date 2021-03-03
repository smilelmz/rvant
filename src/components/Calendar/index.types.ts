/* eslint-disable @typescript-eslint/no-unused-vars */
import { ValueFunction, ValueFunctionMayBeNull } from '../type'

export type DayType =
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

export type CalendarType = 'single' | 'range' | 'multiple'
export type CalendarPosition = 'top' | 'bottom' | 'left' | 'right'
export type DayItem = {
  date?: Date
  text?: string | number
  type?: DayType
  topInfo?: string
  className?: unknown
  bottomInfo?: string
}

export interface CalendarHandler {
  reset: ValueFunctionMayBeNull<Date | Date[]>
  scrollToDate: ValueFunction<Date>
}

export interface CalendarProps {
  show: boolean
  type?: CalendarType
  title?: string | React.ReactNode | React.ReactNode[]
  footer?: React.ReactNode | React.ReactNode[]
  minDate?: Date
  maxDate?: Date
  defaultDate?: Date | Date[] | null
  rowHeight?: number | string
  formatter?: (day: DayItem) => DayItem
  poppable?: boolean
  lazyRender?: boolean
  showMark?: boolean
  showTitle?: boolean
  showSubtitle?: boolean
  showConfirm?: boolean
  readonly?: boolean
  confirmText?: string
  confirmDisabledText?: string
  firstDayOfWeek?: Number
  position?: CalendarPosition
  round?: boolean
  closeOnPopstate?: boolean
  closeOnClickOverlay?: boolean
  safeAreaInsetBottom?: boolean
  maxRanges?: number | string
  rangePrompt?: string
  allowSameDay?: boolean
  select?: ValueFunction<Date | Date[]>
  confirm?: ValueFunction<Date | Date[]>
  close?: VoidFunction
  opened?: VoidFunction
  closed?: VoidFunction
  unselect?: ValueFunction<Date>
  monthShow?: (date: Date, title: string) => void
}
