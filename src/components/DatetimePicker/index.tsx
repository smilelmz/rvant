import React from 'react'
import { BASE_PREFIX } from '../utils/constant'
import { DatetimePickerProps } from './index.types'
import classnames from '../utils/classNames'

const baseClass = `${BASE_PREFIX}datetimepicker`
const DatetimePicker: React.FC<DatetimePickerProps> = ({}) => {
  const className = classnames(baseClass)
  return <div className={className}>123456</div>
}
export default DatetimePicker
