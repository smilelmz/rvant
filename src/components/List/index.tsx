import React, {
  MutableRefObject,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react'
import { ListHandler, ListProps } from './types'
import { createNamespace, isHidden } from '../utils'
import { TabContext } from '../context'
import {
  getRect,
  useEventListener,
  useScrollParent,
  useSyncCallback,
  useWatch
} from '../composables'
import Loading from '../Loading'
import { useI18n } from '../locale'

const [bem, t] = createNamespace('list')
const List = (fieldProps: ListProps, ref: React.Ref<ListHandler>) => {
  const props: ListProps = {
    style: {},
    className: '',
    immediateCheck: true,
    offset: 300,
    direction: 'down',
    ...fieldProps
  }
  const { style, className, children } = props
  const loading = useRef(false)
  const root = useRef<HTMLDivElement>()
  const placeholder = useRef<HTMLDivElement>()
  const tabStatus = useContext(TabContext)
  const scrollParent = useScrollParent(root)
  const { messages } = useI18n()

  const check = useSyncCallback(() => {
    if (
      loading.current ||
      props.finished ||
      props.error ||
      // skip check when inside an inactive tab
      tabStatus?.active === false
    ) {
      return
    }
    const { offset, direction } = props
    const scrollParentRect = getRect(
      scrollParent as MutableRefObject<HTMLElement>
    )

    if (!scrollParentRect.height || isHidden(root.current)) {
      return
    }

    let isReachEdge = false
    const placeholderRect = getRect(
      placeholder as MutableRefObject<HTMLElement>
    )

    if (direction === 'up') {
      isReachEdge = scrollParentRect.top - placeholderRect.top <= offset
    } else {
      isReachEdge = placeholderRect.bottom - scrollParentRect.bottom <= offset
    }

    if (isReachEdge) {
      loading.current = true
      props.updateLoading && props.updateLoading(true)
      props.load && props.load()
    }
  })

  const renderFinishedText = () => {
    if (props.finished) {
      const text = props.customFinished
        ? props.customFinished
        : props.finishedText
      if (text) {
        return <div className={bem('finished-text')}>{text}</div>
      }
    }
  }

  const clickErrorText = () => {
    props.updateError && props.updateError(false)
    check()
  }

  const renderErrorText = () => {
    if (props.error) {
      const text = props.customError ? props.customError : props.errorText
      if (text) {
        return (
          <div className={bem('error-text')} onClick={clickErrorText}>
            {text}
          </div>
        )
      }
    }
  }

  const renderLoading = () => {
    if (loading.current && !props.finished) {
      return (
        <div className={bem('loading')}>
          {props.customLoading ? (
            props.customLoading
          ) : (
            <Loading className={bem('loading-icon')}>
              {props.loadingText || t(messages, 'loading')}
            </Loading>
          )}
        </div>
      )
    }
  }

  useWatch([props.loading, props.finished, props.error], () => check())

  useEffect(() => {
    loading.current = props.loading!
  })

  useEffect(() => {
    if (props.immediateCheck) {
      check()
    }
  }, [])

  useEventListener('scroll', check, { target: scrollParent })

  useImperativeHandle(ref, () => ({ check }))

  const Content = children
  const Placeholder = <div ref={placeholder} className={bem('placeholder')} />
  return (
    <div
      ref={root}
      role='feed'
      style={style}
      className={`${bem()} ${className || ''}`}
      aria-busy={loading.current}
    >
      {props.direction === 'down' ? Content : Placeholder}
      {renderLoading()}
      {renderFinishedText()}
      {renderErrorText()}
      {props.direction === 'up' ? Content : Placeholder}
    </div>
  )
}

export default React.memo(React.forwardRef(List))
