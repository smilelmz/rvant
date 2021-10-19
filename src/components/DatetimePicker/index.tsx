import React from 'react'
import { createNamespace } from '../utils'
import { DatetimePickerProps } from './types'

const [bem] = createNamespace('datetime-picker')
const DatetimePicker: React.FC<DatetimePickerProps> = () => {
  return <div className={bem()}>123456</div>
}
export default React.memo(DatetimePicker)
