import React from 'react'
import { useI18n } from '@/components/locale'
import { t, bem } from './utils'

interface IProps {
  title?: string | React.ReactNode | React.ReactNode[]
  subtitle: string | React.ReactNode | React.ReactNode[]
  showTitle?: boolean
  showSubtitle?: boolean
  firstDayOfWeek?: number
}

const CalendarHeader: React.FC<IProps> = ({
  title,
  subtitle,
  showTitle = true,
  showSubtitle = true,
  firstDayOfWeek = 0
}: IProps) => {
  const { messages } = useI18n()
  const renderTitle = () => {
    if (showTitle) {
      return (
        <div className={bem('header-title')}>
          {title || t(messages, 'title')}
        </div>
      )
    }
  }
  const renderSubtitle = () => {
    if (showSubtitle) {
      return <div className={bem('header-subtitle')}>{subtitle}</div>
    }
  }
  const renderWeekDays = () => {
    const weekdays = t(messages, 'weekdays')
    const renderWeekDays = [
      ...weekdays.slice(firstDayOfWeek, 7),
      ...weekdays.slice(0, firstDayOfWeek)
    ]
    return (
      <div className={bem('weekdays')}>
        {renderWeekDays.map((text, index) => (
          <span key={index.toString()} className={bem('weekday')}>
            {text}
          </span>
        ))}
      </div>
    )
  }
  return (
    <div className={bem('header')}>
      {renderTitle()}
      {renderSubtitle()}
      {renderWeekDays()}
    </div>
  )
}

export default React.memo(CalendarHeader)
