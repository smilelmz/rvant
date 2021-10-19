import React, {
  useContext,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from 'react'
import { IndexAnchorHandler, IndexAnchorProps, IndexAnchorState } from './types'
import {
  BORDER_BOTTOM,
  createNamespace,
  extend,
  getRootScrollTop,
  getScrollTop,
  getZIndexStyle
} from '../utils'
import { IndexBarContext } from '../context'
import { getRect } from '../composables'

const [bem] = createNamespace('index-anchor')
const IndexAnchor = (
  fieldProps: IndexAnchorProps,
  anchorRef: React.Ref<IndexAnchorHandler>
) => {
  const props: IndexAnchorProps = {
    style: {},
    className: '',
    ...fieldProps
  }
  const { style, className, index = 0, children } = props
  const [state, setState] = useState<IndexAnchorState>({
    top: 0,
    left: null,
    rect: { top: 0, height: 0 },
    width: null,
    active: false
  })

  const root = useRef<HTMLDivElement>()
  const parent = useContext(IndexBarContext)
  const isSticky = state.active && parent.props.sticky

  const anchorStyle = useMemo(() => {
    const { zIndex, highlightColor } = parent.props

    if (isSticky) {
      return extend(getZIndexStyle(zIndex), {
        left: state.left ? `${state.left}px` : undefined,
        width: state.width ? `${state.width}px` : undefined,
        transform: state.top ? `translate3d(0, ${state.top}px, 0)` : undefined,
        color: highlightColor
      })
    }
  }, [state])

  const getRectSize = (
    scrollParent: Window | Element,
    scrollParentRect: { top: number }
  ) => {
    const rootRect = getRect(root)
    const newState = { ...state }
    newState.rect.height = rootRect.height

    if (scrollParent === window || scrollParent === document.body) {
      newState.rect.top = rootRect.top + getRootScrollTop()
    } else {
      newState.rect.top =
        rootRect.top + getScrollTop(scrollParent) - scrollParentRect.top
    }

    setState(newState)
    return state.rect
  }

  useImperativeHandle(anchorRef, () => ({
    index,
    getRect: getRectSize,
    state,
    setState,
    $el: root.current
  }))

  return (
    <>
      <div
        ref={root}
        className={className}
        style={{
          ...style,
          height: isSticky ? `${state.rect.height}px` : undefined
        }}
      >
        <div
          style={anchorStyle}
          className={`${bem({ sticky: isSticky })} ${
            isSticky ? BORDER_BOTTOM : ''
          }`}
        >
          {props.anchor || index}
        </div>
      </div>
      {children}
    </>
  )
}
export default React.memo(React.forwardRef(IndexAnchor))
