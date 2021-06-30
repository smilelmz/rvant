import React, { TouchEvent, useRef } from 'react'
import { PasswordInputProps } from './index.types'
import {
  addUnit,
  BORDER_LEFT,
  BORDER_SURROUND,
  createNamespace
} from '../utils'

const [bem] = createNamespace('password-input')
const PasswordInput = (fieldProps: PasswordInputProps) => {
  const props: PasswordInputProps = {
    style: {},
    className: '',
    mask: true,
    value: '',
    length: 6,
    ...fieldProps
  }
  const { style, className } = props
  const root = useRef<HTMLUListElement>()
  const onTouchStart = (event: TouchEvent) => {
    event.nativeEvent.stopImmediatePropagation()
    props.focus && props.focus(event)
  }
  const renderPoints = () => {
    const Points: JSX.Element[] = []
    const { mask, value, length, gutter, focused } = props

    for (let i = 0; i < length; i++) {
      const char = value[i]
      const showBorder = i !== 0 && !gutter
      const showCursor = focused && i === value.length

      let pointStyle
      if (i !== 0 && gutter) {
        pointStyle = { marginLeft: addUnit(gutter) }
      }

      Points.push(
        <li
          className={`${showBorder ? BORDER_LEFT : ''} ${bem('item', {
            focus: showCursor
          })}`}
          style={pointStyle}
          key={i}
        >
          {mask ? (
            <i style={{ visibility: char ? 'visible' : 'hidden' }} />
          ) : (
            char
          )}
          {showCursor && <div className={bem('cursor')} />}
        </li>
      )
    }

    return Points
  }
  const info = props.errorInfo || props.info
  return (
    <div style={style} className={`${bem()} ${className || ''}`}>
      <ul
        className={`${bem('security')} ${!props.gutter ? BORDER_SURROUND : ''}`}
        ref={root}
        onTouchStart={onTouchStart}
      >
        {renderPoints()}
      </ul>
      {info && (
        <div className={bem(props.errorInfo ? 'error-info' : 'info')}>
          {info}
        </div>
      )}
    </div>
  )
}
export default React.memo(PasswordInput)
