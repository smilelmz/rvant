import React, { CSSProperties, MouseEvent } from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'
import { TagProps } from './types'
import { createNamespace, BASE_PREFIX } from '../utils'
import Icon from '../Icon'
import { EventFunction } from '../type'

const [bem] = createNamespace('tag')
const Tag: React.FC<TagProps> = ({
  size,
  mark,
  color,
  plain,
  round,
  textColor,
  closeable,
  type = 'default',
  show = true,
  children,
  close,
  click
}) => {
  const onClose: EventFunction<MouseEvent> = (event?: MouseEvent) => {
    event && event.stopPropagation()
    close && close(event)
  }
  const getStyle = (): CSSProperties => {
    const key = plain ? 'color' : 'backgroundColor'
    const style = { [key]: color }
    if (plain) {
      style.color = textColor || color
      style.borderColor = color
    } else {
      style.color = textColor
      style.background = color
    }
    return style
  }
  const renderTag = () => {
    const classes: Record<string, unknown> = {
      mark,
      plain,
      round
    }
    if (size) classes[size] = size
    const CloseIcon = closeable && (
      <Icon name='cross' className={bem('close')} click={onClose} />
    )
    return (
      <span
        style={getStyle()}
        className={bem([classes, type])}
        onClick={(e) => {
          click && click(e)
        }}
      >
        {children}
        {CloseIcon}
      </span>
    )
  }
  return (
    <CSSTransition
      in={show}
      classNames={closeable ? `${BASE_PREFIX}fade` : undefined}
      timeout={{
        exit: 300,
        enter: 10,
        appear: 10
      }}
      unmountOnExit
    >
      {show ? renderTag() : null}
    </CSSTransition>
  )
}
export default React.memo(Tag)
