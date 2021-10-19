import React, { ReactElement } from 'react'
import { CSSProperties } from 'react'
import { EventFunction } from '../type'
import { Interceptor } from '../utils'

export type TabsType = 'line' | 'card'
export type TabsProps = {
  color?: string
  border?: boolean
  sticky?: boolean
  animated?: boolean
  ellipsis?: boolean
  swipeable?: boolean
  scrollspy?: boolean
  background?: string
  lazyRender?: boolean
  lineWidth?: number | string
  lineHeight?: number | string
  beforeChange?: Interceptor
  titleActiveColor?: string
  titleInactiveColor?: string
  type?: TabsType
  active?: number | string
  duration?: number | string
  offsetTop?: number | string
  swipeThreshold?: number | string
  navLeft?: React.ReactNode | React.ReactNode[]
  navRight?: React.ReactNode | React.ReactNode[]
  click?: (name: string | number, title: string) => void
  change?: (newName: string | number, title: string) => void
  scroll?: (params: { isFixed: boolean; scrollTop: number }) => void
  disabledFunc?: (name: string | number, title: string) => void
  rendered?: (name: string | number, title: string) => void
  updateActive?: (name: string | number) => void
  children?: ReactElement | ReactElement[]
} & Pick<React.HTMLAttributes<HTMLDivElement>, 'style' | 'className'>

export type TabsTitleProps = {
  dot?: boolean
  type?: string
  color?: string
  title?: string
  badge?: number | string
  isActive?: boolean
  disabled?: boolean
  scrollable?: boolean
  activeColor?: string
  customTitle?: () => React.ReactNode | React.ReactNode[]
  inactiveColor?: string
  click?: EventFunction<MouseEvent>
} & Pick<React.HTMLAttributes<HTMLDivElement>, 'style' | 'className'>

export interface TabsContentProps {
  inited?: boolean
  animated?: boolean
  swipeable?: boolean
  lazyRender?: boolean
  count: number
  duration: number | string
  currentIndex: number
  children?: React.ReactNode | React.ReactNode[]
  change?: (index: number) => void
}

export interface TabsProvide {
  props: TabsProps
  setLine: () => void
  onRendered: (name: string | number, title?: string) => void
  scrollIntoView: (immediate?: boolean) => void
  currentName: number | string | undefined
}

export interface TabsState {
  inited: boolean
  position: string
  lineStyle: CSSProperties
  currentIndex: number
}

export interface TabsHandler {
  resize: VoidFunction
  scrollTo: (name: number | string) => void
}
