import React, { useMemo } from 'react'
import { BadgeProps } from './types'
import { isDef, isNumeric, createNamespace, addUnit } from '../utils'

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
          badgeStyle.top = addUnit(y)
          badgeStyle.right = addUnit(x)
        } else {
          badgeStyle.marginTop = addUnit(y)
          badgeStyle.marginLeft = addUnit(x)
        }
      }

      return (
        <div
          className={`${bem({ dot, fixed: !!children })}`}
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
      <CustomTag className={`${bem('wrapper')} ${className}`}>
        {children}
        {renderBadge()}
      </CustomTag>
    )
  }

  return renderBadge()
}
export default React.memo(Badge)
