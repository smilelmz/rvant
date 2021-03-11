import React from 'react'
import { BadgeProps } from './index.types'
import { isDef, isNumeric, createNamespace } from '../utils'

const [bem] = createNamespace('badge')
const Badge: React.FC<BadgeProps> = ({
  dot = false,
  max,
  color,
  offset,
  tag,
  content,
  children,
  style,
  className
}: BadgeProps) => {
  const CustomTag = tag || 'div'
  const hasContent = () => !!(content || (isDef(content) && content !== ''))
  const renderContent = () => {
    if (content && React.isValidElement(content)) {
      return content
    }
    if (!dot && hasContent()) {
      const curContent = content as number | string
      if (max && isNumeric(curContent!) && +curContent > max) {
        return `${max}+`
      }

      return content
    }
  }
  const renderBadge = () => {
    if (hasContent() || dot) {
      const badgeStyle: Record<string, any> = {
        background: color
      }

      if (offset) {
        const [x, y] = offset
        if (children) {
          badgeStyle.top = `${y}px`
          badgeStyle.right = `${-x}px`
        } else {
          badgeStyle.marginTop = `${y}px`
          badgeStyle.marginLeft = `${x}px`
        }
      }

      return (
        <div
          className={`${bem({ dot, fixed: !!children })} ${className}`}
          style={{ ...badgeStyle, ...style }}
        >
          {renderContent()}
        </div>
      )
    }
    return <></>
  }

  if (children) {
    return (
      <CustomTag className={`${bem('wrapper')}`}>
        {children}
        {renderBadge()}
      </CustomTag>
    )
  }

  return renderBadge()
}
export default Badge
