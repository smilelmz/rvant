import React from 'react'

export interface TabsProps {
  style?: Record<string, string | number>
  className?: string
}

export interface TabsTitleProps {
  dot?: boolean
  type?: string
  color?: string
  title?: string
  badge?: number | string
  isActive?: boolean
  disabled?: boolean
  scrollable?: boolean
  activeColor?: string
  renderTitle?: () => React.ReactNode | React.ReactNode[]
  inactiveColor?: string
}

export interface TabsContentProps {
  inited?: boolean
  animated?: boolean
  swipeable?: boolean
  count: number
  duration: number | string
  currentIndex: number
  children?: React.ReactNode | React.ReactNode[]
  change?: (index: number) => void
}
