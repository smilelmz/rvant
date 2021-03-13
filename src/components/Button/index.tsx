import React from 'react'
import { createNamespace, BORDER_SURROUND, WHITE } from '../utils'
import { ButtonProps } from './index.types'

import Icon from '../Icon'
import Loading from '../Loading'

const [bem] = createNamespace('button')
const Button: React.FC<ButtonProps> = ({
  className,
  style,
  text,
  children,
  type = 'default',
  plain,
  disabled,
  loading,
  loadingIcon,
  loadingType,
  loadingText,
  loadingSize = 20,
  round,
  square,
  color,
  fontColor,
  tag,
  nativeType,
  iconPrefix,
  block,
  url,
  replace = false,
  click,
  icon,
  hairline,
  size = 'normal',
  iconPosition = 'left'
}: ButtonProps) => {
  const CustomTag = tag || 'button'
  const classes = `${bem([
    type,
    size,
    {
      plain,
      block,
      round,
      square,
      loading,
      disabled,
      hairline
    }
  ])} ${hairline ? BORDER_SURROUND : ''} ${className || ''}`
  const onClick = (e: any) => {
    if (!loading && !disabled) {
      click && click(e)
    }
  }
  const renderLoadingIcon = () => {
    if (loadingIcon) {
      return loadingIcon
    }
    return (
      <Loading
        key='loading'
        className={bem('loading')}
        size={loadingSize}
        type={loadingType}
        color='currentColor'
      />
    )
  }
  const renderIcon = () => {
    if (loading) {
      return renderLoadingIcon()
    }
    if (icon) {
      return (
        <Icon
          key='icon'
          name={icon}
          className={bem('icon')}
          classPrefix={iconPrefix}
        />
      )
    }
  }
  const renderText = () => {
    let buttonText
    if (loading) {
      buttonText = loadingText
    } else {
      buttonText = children || text
    }

    if (buttonText) {
      return (
        <span key='text' className={bem('text')}>
          {buttonText}
        </span>
      )
    }
  }
  const getStyle = () => {
    const commonStyle: Record<string, string | number> = {}
    if (color) {
      commonStyle.color = plain ? color : WHITE
      if (!plain) {
        commonStyle.background = color
      }
      if (color.indexOf('gradient') !== -1) {
        commonStyle.border = 0
      } else {
        commonStyle.borderColor = color
      }
    }
    if (fontColor) {
      commonStyle.color = fontColor
    }
    return commonStyle
  }
  const props: Record<string, any> = {
    style: { ...getStyle(), ...style },
    onClick,
    className: classes
  }
  if (nativeType) props.type = nativeType
  if (url && CustomTag === 'a') {
    props.href = url
    if (replace) {
      props.target = '_self'
    } else {
      props.target = '_blank'
    }
  }
  return (
    <CustomTag {...props}>
      <div className={bem('content')}>
        {iconPosition === 'left' && renderIcon()}
        {renderText()}
        {iconPosition === 'right' && renderIcon()}
      </div>
    </CustomTag>
  )
}

export default Button
