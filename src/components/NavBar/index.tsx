import React, { CSSProperties, MouseEvent, useRef } from 'react'
import { NavBarProps } from './index.types'
import { BORDER_BOTTOM, createNamespace, getZIndexStyle } from '../utils'
import { usePlaceholder } from '../composables'
import { Icon } from '..'

const [bem] = createNamespace('navbar')
const NavBar = ({
  style = {},
  className,
  title,
  fixed,
  zIndex,
  left,
  right,
  leftText,
  rightText,
  leftArrow,
  placeholder,
  safeAreaInsetTop,
  border = true,
  clickLeft,
  clickRight
}: NavBarProps) => {
  const navBarRef = useRef<HTMLDivElement>(null)
  const renderPlaceholder = usePlaceholder(navBarRef, bem)
  const onClickLeft = (event: MouseEvent) => clickLeft && clickLeft(event)
  const onClickRight = (event: MouseEvent) => clickRight && clickRight(event)

  const renderLeft = () => {
    if (left) return left
    return [
      leftArrow && (
        <Icon key='leftArrow' className={bem('arrow')} name='arrow-left' />
      ),
      leftText && (
        <span key='leftText' className={bem('text')}>
          {leftText}
        </span>
      )
    ]
  }

  const renderRight = () => {
    if (right) return right
    return <span className={bem('text')}>{rightText}</span>
  }

  const renderNavBar = () => {
    const zIndexStyle: CSSProperties = getZIndexStyle(zIndex)

    const hasLeft = leftArrow || leftText || left
    const hasRight = rightText || right

    return (
      <div
        ref={navBarRef}
        style={{ ...zIndexStyle, ...style }}
        className={`${bem({
          fixed,
          'safe-area-inset-top': safeAreaInsetTop
        })} ${border ? BORDER_BOTTOM : ''}  ${className || ''}`}
      >
        <div className={bem('content')}>
          {hasLeft && (
            <div className={bem('left')} onClick={onClickLeft}>
              {renderLeft()}
            </div>
          )}
          <div className={`${bem('title')} van-ellipsis`}>{title}</div>
          {hasRight && (
            <div className={bem('right')} onClick={onClickRight}>
              {renderRight()}
            </div>
          )}
        </div>
      </div>
    )
  }

  if (fixed && placeholder) {
    return renderPlaceholder(renderNavBar)
  }

  return renderNavBar()
}
export default NavBar
