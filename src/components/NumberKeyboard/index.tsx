import React, { useMemo, useRef } from 'react'
import { KeyConfig, NumberKeyboardProps, KeyType } from './index.types'
import {
  createNamespace,
  getZIndexStyle,
  isBoolean,
  stopPropagation
} from '../utils'
import NumberKeyboardKey from './key'
import { useClickAway, useWatch } from '../composables'
import CreatePortal from '../CreatePortal'
import { CSSTransition } from 'react-transition-group'

// qestion: a problem of bubbling between synthetic events and native events
const [bem] = createNamespace('number-keyboard')
const NumberKeyboard = (fieldProps: NumberKeyboardProps) => {
  const props: NumberKeyboardProps = {
    style: {},
    className: '',
    transition: true,
    blurOnClose: true,
    showDeleteKey: true,
    hideOnClickOutside: true,
    safeAreaInsetBottom: true,
    theme: 'default',
    value: '',
    extraKey: '',
    maxlength: Number.MAX_VALUE,
    ...fieldProps
  }
  const { style, className } = props
  const root = useRef<HTMLDivElement>()

  const genBasicKeys = () => {
    const keys: KeyConfig[] = Array(9)
      .fill('')
      .map((_, i) => ({ text: i + 1 }))

    if (props.randomKeyOrder) {
      keys.sort(() => (Math.random() > 0.5 ? 1 : -1))
    }

    return keys
  }

  const genDefaultKeys = (): KeyConfig[] => [
    ...genBasicKeys(),
    { text: props.extraKey as string, type: 'extra' },
    { text: 0 },
    {
      text: props.showDeleteKey ? props.deleteButtonText : '',
      type: props.showDeleteKey ? 'delete' : ''
    }
  ]

  const genCustomKeys = () => {
    const keys = genBasicKeys()
    const { extraKey } = props
    const extraKeys = Array.isArray(extraKey) ? extraKey : [extraKey]

    if (extraKeys.length === 1) {
      keys.push({ text: 0, wider: true }, { text: extraKeys[0], type: 'extra' })
    } else if (extraKeys.length === 2) {
      keys.push(
        { text: extraKeys[0], type: 'extra' },
        { text: 0 },
        { text: extraKeys[1], type: 'extra' }
      )
    }

    return keys
  }

  const keys = useMemo(
    () => (props.theme === 'custom' ? genCustomKeys() : genDefaultKeys()),
    [props.theme]
  )

  const onBlur = () => {
    if (props.visible) props.blur && props.blur()
  }

  const onClose = () => {
    props.close && props.close()

    if (props.blurOnClose) onBlur()
  }

  const onAnimationEnd = () => {
    if (props.visible) {
      props.show && props.show()
    } else {
      props.hide && props.hide()
    }
  }

  const onPress = (text: string, type: KeyType) => {
    if (text === '') {
      if (type === 'extra') {
        onBlur()
      }
      return
    }

    const { value } = props

    if (type === 'delete') {
      props.delete && props.delete()
      props.change && props.change(value.slice(0, value.length - 1))
    } else if (type === 'close') {
      onClose()
    } else if (value.length < props.maxlength) {
      props.input && props.input(text)
      props.change && props.change(value + text)
    }
  }

  const renderTitle = () => {
    const { title, theme, closeButtonText } = props
    const showClose = closeButtonText && theme === 'default'
    const showTitle = title || showClose || props.titleLeft

    if (!showTitle) {
      return
    }

    return (
      <div className={bem('header')}>
        {props.titleLeft && (
          <span className={bem('title-left')}>{props.titleLeft}</span>
        )}
        {title && <h2 className={bem('title')}>{title}</h2>}
        {showClose && (
          <button type='button' className={bem('close')} onClick={onClose}>
            {closeButtonText}
          </button>
        )}
      </div>
    )
  }

  const renderKeys = () => {
    return keys.map((key, index) => {
      let content = null

      if (key.type === 'delete') {
        content = props.customDeleteKey
      }
      if (key.type === 'extra') {
        content = props.customExtraKey
      }

      return (
        <NumberKeyboardKey
          key={index}
          text={key.text}
          type={key.type}
          wider={key.wider}
          color={key.color}
          press={onPress}
        >
          {content}
        </NumberKeyboardKey>
      )
    })
  }

  const renderSidebar = () => {
    if (props.theme === 'custom') {
      return (
        <div className={bem('sidebar')}>
          {props.showDeleteKey && (
            <NumberKeyboardKey
              large
              text={props.deleteButtonText}
              type='delete'
              press={onPress}
            >
              {props.customDeleteKey}
            </NumberKeyboardKey>
          )}
          <NumberKeyboardKey
            large
            text={props.closeButtonText}
            type='close'
            color='blue'
            loading={props.closeButtonLoading}
            press={onPress}
          />
        </div>
      )
    }
  }

  const renderTransition = () => {
    const Title = renderTitle()
    return (
      <CSSTransition
        in={props.visible}
        classNames={props.transition ? 'van-slide-up' : ''}
        timeout={{
          exit: 200,
          enter: 200,
          appear: 10
        }}
        unmountOnExit={true}
      >
        <div
          ref={root}
          style={{ ...style, ...getZIndexStyle(props.zIndex) }}
          className={`${bem({
            unfit: !props.safeAreaInsetBottom,
            'with-title': !!Title
          })} ${className || ''}`}
          onTouchStart={stopPropagation}
          onAnimationEnd={onAnimationEnd}
        >
          {Title}
          <div className={bem('body')}>
            <div className={bem('keys')}>{renderKeys()}</div>
            {renderSidebar()}
          </div>
        </div>
      </CSSTransition>
    )
  }

  useWatch(
    () => props.visible,
    (value) => {
      if (!props.transition) {
        if (value) {
          props.show && props.show()
        } else {
          props.hide && props.hide()
        }
      }
    }
  )

  useClickAway(
    () => {
      if (props.hideOnClickOutside) {
        onClose()
      }
    },
    root,
    'touchstart'
  )

  if (props.teleport) {
    const teleportEle = !isBoolean(props.teleport)
      ? (props.teleport as HTMLElement)
      : undefined
    return (
      <CreatePortal
        el={teleportEle}
        style={props.teleportStyle}
        className={props.teleportClassName}
      >
        {renderTransition()}
      </CreatePortal>
    )
  }

  return renderTransition()
}
export default React.memo(NumberKeyboard)
