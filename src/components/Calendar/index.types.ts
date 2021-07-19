/* eslint-disable @typescript-eslint/no-unused-vars */
import { Actions } from '../composables/use-toggle'
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
  text?: string | number | React.ReactNode | React.ReactNode[]
  type?: DayType
  topInfo?: string
  className?: string
  bottomInfo?: string
}

export interface CalendarHandler {
  reset: ValueFunctionMayBeNull<Date | Date[]>
  scrollToDate: ValueFunction<Date>
}

export interface CalendarProps {
  style?: Record<string, string | number>
  className?: string
  show?: boolean
  type?: CalendarType
  title?: string | React.ReactNode | React.ReactNode[]
  color?: string
  footer?: React.ReactNode | React.ReactNode[]
  minDate?: Date
  maxDate?: Date
  defaultDate?: Date | Date[]
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
  firstDayOfWeek?: number
  position?: CalendarPosition
  round?: boolean
  closeOnClickOverlay?: boolean
  safeAreaInsetBottom?: boolean
  maxRange?: number | string
  rangePrompt?: string
  allowSameDay?: boolean
  select?: (date: Date | Date[], status?: boolean) => void
  confirm?: ValueFunction<Date | Date[]>
  close?: VoidFunction
  opened?: VoidFunction
  closed?: VoidFunction
  unselect?: ValueFunction<Date>
  monthShow?: (date: Date, title: string) => void
  updateShow?: (show: boolean) => void
}

export interface IHandles {
  date: Date
  showed: boolean
  setVisible: (value?: boolean) => void
  getTitle: () => string
  getHeight: () => number
  scrollIntoView: (body: Element | null) => void
}
