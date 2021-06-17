import React, {
  CSSProperties,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from 'react'
import { SwipeItemHandler, SwipeItemProps } from './index.types'
import { createNamespace } from '../utils'
import { SwipeContext } from '../context'

const [bem] = createNamespace('swipe-item')
const SwipeItem = (
  { index = 0, children }: SwipeItemProps,
  ref: React.Ref<SwipeItemHandler>
) => {
  const rendered = useRef(false)
  const [offset, setOffset] = useState(0)
  const [mounted, setMounted] = useState(false)
  const parent = useContext(SwipeContext)

  const style = useMemo(() => {
    const style: CSSProperties = {}
    const { vertical } = parent.props

    if (parent.size) {
      style[vertical ? 'height' : 'width'] = `${parent.size}px`
    }

    if (offset) {
      style.transform = `translate${vertical ? 'Y' : 'X'}(${offset}px)`
    }

    return style
  }, [parent.props.vertical, parent.size, offset])

  const shouldRender = () => {
    const { loop, lazyRender } = parent.props

    if (!lazyRender || rendered.current) {
      return true
    }

    if (!mounted) {
      return false
    }

    const active = parent.activeIndicator
    const maxActive = parent.count - 1
    const prevActive = active === 0 && loop ? maxActive : active - 1
    const nextActive = active === maxActive && loop ? 0 : active + 1
    rendered.current =
      index === active || index === prevActive || index === nextActive

    return rendered.current
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  useImperativeHandle(ref, () => ({
    setOffset: (newOffset: number) => {
      setOffset(newOffset)
    }
  }))

  return (
    <div className={bem()} style={style}>
      {shouldRender() ? children : null}
    </div>
  )
}

export default React.memo(React.forwardRef(SwipeItem))
