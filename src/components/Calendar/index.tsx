import React from 'react'
import { BASE_PREFIX } from '../utils/constant'
import { CalendarProps } from './index.types'
import classnames from '../utils/classNames'

const baseClass = `${BASE_PREFIX}calendar`
const Calendar: React.FC<CalendarProps> = ({}) => {
  const className = classnames(baseClass)
  return <div className={className}>123456</div>
}
export default Calendar
