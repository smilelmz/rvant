export interface SwipeProps {
  style?: Record<string, string | number>
  className?: string
  loop?: boolean
  width?: number | string
  height?: number | string
  vertical?: boolean
  touchable?: boolean
  lazyRender?: boolean
  indicatorColor?: string
  showIndicators?: boolean
  stopPropagation?: boolean
  autoplay?: number | string
  duration?: number | string
  initialSwipe?: number | string
  renderIndicator?: (opt: { active: number }) => React.ReactNode
  change?: (activeIndicator: number) => void
  children?: React.ReactNode | React.ReactNode[]
}

export type StateType = {
  rect: {
    width: number
    height: number
  }
  width: number
  height: number
  offset: number
  swiping: boolean
  active: number
}

export type SwipeToOptions = {
  immediate?: boolean
}

export interface SwipeProvide {
  props: SwipeProps
  size: number
  count: number
  activeIndicator: number
}

export interface SwipeHandler {
  prev: VoidFunction
  next: VoidFunction
  state: StateType
  resize: VoidFunction
  swipeTo: (index: number, options?: SwipeToOptions) => void
}
