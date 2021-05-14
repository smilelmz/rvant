import React, {
  CSSProperties,
  MouseEvent,
  useEffect,
  useRef,
  useState
} from 'react'
import { NoticeBarProps } from './index.types'
import { isDef, createNamespace, raf, doubleRaf } from '../utils'
import Icon from '../Icon'
import { getRect, useEventListener, useWatch } from '../composables'

const [bem] = createNamespace('notice-bar')
const NoticeBar = ({
  style = {},
  className,
  text,
  mode,
  color,
  leftIcon,
  rightIcon,
  wrapable,
  background,
  scrollable = null,
  delay = 1,
  speed = 60,
  children,
  click,
  close,
  replay
}: NoticeBarProps) => {
  const wrapWidth = useRef(0)
  const contentWidth = useRef(0)
  let startTimer: NodeJS.Timeout

  const wrapRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const [show, setShow] = useState(true)
  const [offset, setOffset] = useState(0)
  const [duration, setDuration] = useState(0)

  const renderLeftIcon = () => {
    if (!leftIcon) return
    if (leftIcon && typeof leftIcon === 'string') {
      return <Icon className={bem('left-icon')} name={leftIcon} />
    }
    return leftIcon
  }

  const getRightIconName = () => {
    if (mode === 'closeable') {
      return 'cross'
    }
    if (mode === 'link') {
      return 'arrow'
    }
  }

  const onClickRightIcon = (event?: MouseEvent) => {
    if (mode === 'closeable') {
      setShow(false)
      close && close(event)
    }
  }

  const renderRightIcon = () => {
    if (rightIcon) return rightIcon

    const name = getRightIconName()
    if (name) {
      return (
        <Icon
          name={name}
          className={bem('right-icon')}
          click={onClickRightIcon}
        />
      )
    }
  }

  const onTransitionEnd = () => {
    setOffset(wrapWidth.current)
    setDuration(0)

    // wait for Vue to render offset
    // using nextTick won't work in iOS14
    raf(() => {
      // use double raf to ensure animation can start
      doubleRaf(() => {
        setOffset(-contentWidth.current)
        setDuration((contentWidth.current + wrapWidth.current) / +speed)
        replay && replay()
      })
    })
  }

  const renderMarquee = () => {
    const ellipsis = scrollable === false && !wrapable
    const style = {
      transform: offset ? `translateX(${offset}px)` : '',
      transitionDuration: `${duration}s`
    }
    return (
      <div
        ref={wrapRef}
        role='marquee'
        className={bem('wrap')}
        onClick={(e: MouseEvent) => click && click(e)}
      >
        <div
          ref={contentRef}
          style={style}
          className={`${bem('content')} ${ellipsis && 'van-ellipsis'}`}
          onTransitionEnd={onTransitionEnd}
        >
          {children || text}
        </div>
      </div>
    )
  }

  const reset = () => {
    wrapWidth.current = 0
    contentWidth.current = 0
    setOffset(0)
    setDuration(0)
  }

  const start = () => {
    const ms = isDef(delay) ? +delay * 1000 : 0
    reset()
    clearTimeout(startTimer)
    startTimer = setTimeout(() => {
      if (!wrapRef.current || !contentRef.current || scrollable === false) {
        return
      }
      const wrapRefWidth = getRect(wrapRef).width
      const contentRefWidth = getRect(contentRef).width
      if (scrollable || contentRefWidth > wrapRefWidth) {
        doubleRaf(() => {
          wrapWidth.current = wrapRefWidth
          contentWidth.current = contentRefWidth
          setOffset(-contentWidth.current)
          setDuration(contentWidth.current / +speed)
        })
      }
    }, ms)
  }

  useEffect(() => {
    start()
    return () => {
      clearTimeout(startTimer)
    }
  }, [])

  useEventListener('pageshow', start)
  useWatch([text, scrollable], start)

  const compStyle: CSSProperties = {
    color,
    background,
    ...style
  }
  if (!show) {
    compStyle.display = 'none'
  }

  return (
    <div
      role='alert'
      className={`${bem({ wrapable })} ${className || ''}`}
      style={compStyle}
    >
      {renderLeftIcon()}
      {renderMarquee()}
      {renderRightIcon()}
    </div>
  )
}
export default NoticeBar
