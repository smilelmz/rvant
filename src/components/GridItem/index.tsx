import React, { CSSProperties, useContext } from 'react'
import { GridItemProps } from './index.types'
import { createNamespace, addUnit, BORDER } from '../utils'
import Badge from '../Badge'
import Icon from '../Icon'
import { GridContext } from '../context'

const [bem] = createNamespace('grid-item')
const GridItem = ({
  style = {},
  className = '',
  dot,
  text,
  icon,
  badge,
  iconPrefix,
  index = 0,
  children,
  click
}: GridItemProps) => {
  const parent = useContext(GridContext)
  if (!parent) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('[Vant] <GridItem> must be a child component of <Grid>.')
    }
    return <></>
  }
  const getRootStyle = () => {
    const { square, gutter, columnNum } = parent
    const percent = `${100 / +columnNum}%`
    const style: CSSProperties = {
      flexBasis: percent
    }
    if (square) {
      style.paddingTop = percent
    } else if (gutter) {
      const gutterValue = addUnit(gutter)
      style.paddingRight = gutterValue

      if (index >= columnNum) {
        style.marginTop = gutterValue
      }
    }

    return style
  }
  const getContentStyle = () => {
    const { square, gutter } = parent

    if (square && gutter) {
      const gutterValue = addUnit(gutter)
      return {
        right: gutterValue,
        bottom: gutterValue,
        height: 'auto'
      }
    }
  }
  const renderIcon = () => {
    if (!icon) return <></>
    if (typeof icon === 'string') {
      return (
        <Icon
          key={'gridIcon'}
          dot={dot}
          name={icon}
          size={parent.iconSize}
          badge={badge}
          className={bem('icon')}
          classPrefix={iconPrefix}
        />
      )
    }

    return (
      <Badge dot={dot} content={badge}>
        {icon}
      </Badge>
    )
  }
  const renderText = () => {
    if (typeof text === 'string') {
      return (
        <span key={'gridText'} className={bem('text')}>
          {text}
        </span>
      )
    }
    return text || <></>
  }

  const renderContent = () => {
    if (children) {
      return children
    }
    return [renderIcon(), renderText()]
  }
  const { center, border, square, gutter, direction, clickable } = parent
  const classes = bem('content', [
    direction,
    {
      center,
      square,
      clickable,
      surround: border && gutter
    }
  ])

  return (
    <div
      style={{ ...getRootStyle(), ...style }}
      className={`${bem({ square })} ${className}`}
    >
      <div
        role={clickable ? 'button' : undefined}
        className={`${classes} ${border ? BORDER : ''}`}
        style={getContentStyle()}
        tabIndex={clickable ? 0 : undefined}
        onClick={click}
      >
        {renderContent()}
      </div>
    </div>
  )
}
export default GridItem
