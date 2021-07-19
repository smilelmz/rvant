import React from 'react'
import { ActionSheetAction, ActionSheetProps } from './index.types'
import { createNamespace } from '../utils'
import Icon from '../Icon'
import Loading from '../Loading'
import Popup from '../Popup'

const [bem] = createNamespace('action-sheet')
const ActionSheet = ({
  style = {},
  className,
  show = false,
  zIndex,
  duration = 0.3,
  overlay = true,
  overlayClass,
  overlayStyle = {},
  transitionAppear = false,
  lockScroll = true,
  closeOnClickOverlay = true,
  title,
  actions,
  cancelText,
  description,
  closeOnPopstate,
  closeOnClickAction,
  round = true,
  closeable = true,
  closeIcon = 'cross',
  safeAreaInsetBottom = true,
  children,
  select,
  cancel,
  opened,
  closed,
  updateShow
}: ActionSheetProps) => {
  const onCancel = () => {
    cancel && cancel()
    updateShow && updateShow(false)
  }
  const renderHeader = () => {
    if (title) {
      return (
        <div className={bem('header')}>
          {title}
          {closeable && (
            <Icon name={closeIcon} className={bem('close')} click={onCancel} />
          )}
        </div>
      )
    }
  }

  const renderCancel = () => {
    if (cancelText) {
      return [
        <div className={bem('gap')} key='gap' />,
        <button
          key='cancel_text_button'
          type='button'
          className={bem('cancel')}
          onClick={onCancel}
        >
          {cancelText}
        </button>
      ]
    }
  }

  const renderOption = (item: ActionSheetAction, index: number) => {
    const {
      name,
      color,
      subname,
      loading,
      callback,
      disabled,
      className
    } = item

    const Content = loading ? (
      <Loading key='loading' className={bem('loading-icon')} />
    ) : (
      [
        <span key='main-name' className={bem('name')}>
          {name}
        </span>,
        subname && (
          <div key='sub-name' className={bem('subname')}>
            {subname}
          </div>
        )
      ]
    )

    const onClick = () => {
      if (disabled || loading) {
        return
      }

      if (callback) {
        callback(item)
      }

      if (closeOnClickAction) {
        updateShow && updateShow(false)
      }

      select && select(item, index)
    }

    return (
      <button
        key={`option_${index}`}
        type='button'
        style={{ color }}
        className={`${bem('item', { loading, disabled })} ${className}`}
        onClick={onClick}
      >
        {Content}
      </button>
    )
  }

  const renderDescription = () => {
    if (description) {
      return <div className={bem('description')}>{description}</div>
    }
  }

  const renderOptions = () => {
    if (actions) {
      return actions.map(renderOption)
    }
  }

  const popupProps = {
    show,
    className: `${bem()} ${className}`,
    style,
    round,
    safeAreaInsetBottom,
    zIndex,
    duration,
    overlay,
    overlayClass,
    overlayStyle,
    transitionAppear,
    lockScroll,
    closeOnClickOverlay,
    closeOnPopstate,
    close: onCancel,
    closed,
    opened,
    updateShow
  }

  return (
    <Popup position={'bottom'} {...popupProps}>
      {renderHeader()}
      {renderDescription()}
      <div className={bem('content')}>
        {renderOptions()}
        {children}
      </div>
      {renderCancel()}
    </Popup>
  )
}
export default React.memo(ActionSheet)
