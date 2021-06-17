export interface SwipeItemProps {
  index?: number
  children?: React.ReactNode | React.ReactNode[]
}

export interface SwipeItemHandler {
  setOffset: (offset: number) => void
}
