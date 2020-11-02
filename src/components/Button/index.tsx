import React from 'react'
import { BORDER_SURROUND, WHITE, BASE_PREFIX } from '../utils/constant'
import classnames from '../utils/classNames'
import { ButtonProps } from './index.types'

import Icon from '../Icon'
import Loading from '../Loading'

const baseClass = `${BASE_PREFIX}button`
const Button: React.FC<ButtonProps> = ({
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
  touchstart,
  icon,
  hairline,
  size = 'normal'
}: ButtonProps) => {
  const CustomTag = tag || 'button'
  let className = classnames(baseClass, [
    { type },
    { plain: plain || hairline },
    { disabled },
    { loading },
    { round },
    { square },
    { block },
    { hairline },
    { [size]: size },
    { onlyIcon: !text && !children }
  ])
  className = `${className} ${hairline ? BORDER_SURROUND : ''}`
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
  const onClick = (e: any) => {
    if (!loading && !disabled) {
      click && click(e)
    }
  }
  const onTouchStart = (e: any) => {
    if (loading) {
      touchstart && touchstart(e)
    }
  }
  const Content = () => {
    const content = []
    if (loading) {
      if (loadingIcon) {
        content.push(loadingIcon)
      } else {
        content.push(
          <Loading
            key='loading'
            className={classnames(`${baseClass}__loading`)}
            size={loadingSize}
            type={loadingType}
            color='currentColor'
          />
        )
      }
    } else if (icon) {
      content.push(
        <Icon
          key='icon'
          name={icon}
          className={classnames(`${baseClass}__icon`)}
          classPrefix={iconPrefix}
        />
      )
    }
    let buttonText
    if (loading) {
      buttonText = loadingText
    } else {
      buttonText = children || text
    }

    if (buttonText) {
      content.push(
        <span key='text' className={classnames(`${baseClass}__text`)}>
          {buttonText}
        </span>
      )
    }
    return content
  }
  const props: Record<string, any> = {
    style: { ...style, ...commonStyle },
    onClick,
    onTouchStart,
    className
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
      <div className={classnames(`${baseClass}__content`)}>{Content()}</div>
    </CustomTag>
  )
}

export default Button
