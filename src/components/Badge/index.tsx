import React, { useMemo } from 'react'
import { BadgeProps } from './index.types'
import { isDef, isNumeric, createNamespace } from '../utils'

const [bem] = createNamespace('badge')
const Badge: React.FC<BadgeProps> = ({
  className = '',
  style = {},
  dot = false,
  max,
  color,
  offset,
  tag,
  content,
  children,

  showZero = true
}: BadgeProps) => {
  const CustomTag = tag || 'div'
  const hasContent = useMemo(() => {
    if (content) return true
    return isDef(content) && content !== '' && (showZero || content !== 0)
  }, [content])
  const renderContent = () => {
    if (content && React.isValidElement(content)) {
      return content
    }
    if (!dot && hasContent) {
      const curContent = content as number | string
      if (max && isNumeric(curContent!) && +curContent > max) {
        return `${max}+`
      }
      return content
    }
  }
  const renderBadge = () => {
    if (hasContent || dot) {
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
          className={`${bem({ dot, fixed: !!children })}`}
          style={badgeStyle}
        >
          {renderContent()}
        </div>
      )
    }
    return <></>
  }

  if (children) {
    return (
      <CustomTag className={`${bem('wrapper')} ${className}`} style={style}>
        {children}
        {renderBadge()}
      </CustomTag>
    )
  }

  return renderBadge()
}
export default React.memo(Badge)
