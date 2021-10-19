import React from 'react'

export type SidebarProps = {
  value?: number | string
  change?: (value: number) => void
} & Pick<
  React.HTMLAttributes<HTMLDivElement>,
  'style' | 'className' | 'children'
>

export type SidebarProvide = {
  getActive: () => number
  setActive: (value: number) => void
}
