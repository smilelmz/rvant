export interface IndexAnchorProps {
  style?: Record<string, string | number>
  className?: string
  index?: any
  anchor?: string | React.ReactNode | React.ReactNode[]
  children?: React.ReactNode | React.ReactNode[]
}

export interface IndexAnchorState {
  top: number
  left: number
  rect: {
    top: number
    height: number
  }
  width: number
  active: boolean
}

export interface IndexAnchorHandler {
  index: any
  state: IndexAnchorState
  setState: React.Dispatch<React.SetStateAction<IndexAnchorState>>
  $el: HTMLDivElement
  getRect: (
    scrollParent: Window | Element,
    scrollParentRect: {
      top: number
    }
  ) => {
    top: number
    height: number
  }
}
