import React from 'react'
import { SkeletonProps } from './types'
import { createNamespace, addUnit, getSizeStyle } from '../utils'

const [bem] = createNamespace('skeleton')
const DEFAULT_ROW_WIDTH = '100%'
const DEFAULT_LAST_ROW_WIDTH = '60%'

const Skeleton: React.FC<SkeletonProps> = ({
  title,
  round,
  avatar,
  avatarSize,
  titleWidth,
  row = 0,
  loading = true,
  animate = true,
  avatarShape = 'round',
  rowWidth = DEFAULT_ROW_WIDTH,
  children
}) => {
  const renderAvatar = () => {
    if (avatar) {
      return (
        <div
          className={bem('avatar', avatarShape)}
          style={getSizeStyle(avatarSize)}
        />
      )
    }
    return <></>
  }
  const renderTitle = () => {
    if (title) {
      return (
        <h3 className={bem('title')} style={{ width: addUnit(titleWidth) }} />
      )
    }
    return <></>
  }
  const getRowWidth = (index: number) => {
    if (rowWidth === DEFAULT_ROW_WIDTH && index === +row - 1) {
      return DEFAULT_LAST_ROW_WIDTH
    }

    if (Array.isArray(rowWidth)) {
      return rowWidth[index]
    }

    return rowWidth
  }
  const renderRows = () => {
    return Array(Number(row))
      .fill('')
      .map((_, i) => (
        <div
          key={i}
          className={bem('row')}
          style={{ width: addUnit(getRowWidth(i)) }}
        />
      ))
  }
  if (!loading) return children || <></>
  return (
    <div className={bem({ animate, round })}>
      {renderAvatar()}
      <div className={bem('content')}>
        {renderTitle()}
        {renderRows()}
      </div>
    </div>
  )
}
export default React.memo(Skeleton)
