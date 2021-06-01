/* eslint-disable react/no-danger */
import React from 'react'
import { ToastProps } from './index.types'
import { isDef, createNamespace } from '../utils'
import Icon from '../Icon'
import Loading from '../Loading'

const [bem] = createNamespace('toast--content')
const Toast: React.FC<ToastProps> = ({
  type = 'text',
  position = 'middle',
  message = '',
  icon = '',
  iconSize,
  iconPrefix = undefined,
  loadingType = 'circular',
  className = ''
}: ToastProps) => {
  const renderIcon = () => {
    const hasIcon = icon || type === 'success' || type === 'fail'

    if (hasIcon) {
      return (
        <Icon
          className={bem('icon')}
          classPrefix={iconPrefix}
          size={iconSize}
          name={icon || type}
        />
      )
    }

    if (type === 'loading') {
      return <Loading className={bem('loading')} type={loadingType} />
    }
  }

  const renderMessage = () => {
    if (!isDef(message) || message === '') {
      return
    }

    if (type === 'html') {
      return (
        <div
          className={bem('text')}
          dangerouslySetInnerHTML={{ __html: `${message}` }}
        />
      )
    }
    return <div className={bem('text')}>{message}</div>
  }

  return (
    <div className={`${bem([position, { [type]: !icon }])} ${className}`}>
      {renderIcon()}
      {renderMessage()}
    </div>
  )
}
export default React.memo(Toast)
