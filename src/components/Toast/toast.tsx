/* eslint-disable react/no-danger */
import React from 'react'
import { BASE_PREFIX } from '../utils/constant'
import { ToastProps } from './index.types'
import { isDef } from '../utils'
import classnames from '../utils/classNames'
import Icon from '../Icon'
import Loading from '../Loading'

const baseClass = `${BASE_PREFIX}toast-content`
const Toast: React.FC<ToastProps> = ({
  type = 'text',
  position = 'middle',
  message = '',
  icon = '',
  iconPrefix = undefined,
  loadingType = 'circular',
  className = ''
}: ToastProps) => {
  const genIcon = () => {
    const hasIcon = icon || type === 'success' || type === 'fail'

    if (hasIcon) {
      return (
        <Icon
          className={`${baseClass}__icon`}
          classPrefix={iconPrefix}
          name={icon || type}
        />
      )
    }

    if (type === 'loading') {
      return <Loading className={`${baseClass}__loading`} type={loadingType} />
    }
  }

  const genMessage = () => {
    if (!isDef(message) || message === '') {
      return
    }

    if (type === 'html') {
      return (
        <div
          className={`${baseClass}__text`}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )
    }
    return <div className={`${baseClass}__text`}>{message}</div>
  }

  const toastClassName = classnames(baseClass, [
    { [position]: true },
    { [type]: !icon }
  ])
  return (
    <div className={`${toastClassName} ${className}`}>
      {genIcon()}
      {genMessage()}
    </div>
  )
}
export default Toast
