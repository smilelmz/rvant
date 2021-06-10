import React from 'react'

export interface SidebarProps {
  style?: Record<string, string | number>
  className?: string
  value?: number | string
  children?: React.ReactNode | React.ReactNode[]
  change?: (value: number) => void
}

export type SidebarProvide = {
  getActive: () => number
  setActive: (value: number) => void
}
