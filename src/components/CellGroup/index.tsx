import React from 'react'
import { BORDER_TOP_BOTTOM, createNamespace } from '../utils'
import { CellGroupProps } from './index.types'

const [bem] = createNamespace('cell-group')
const CellGroup: React.FC<CellGroupProps> = ({
  title,
  border = true,
  children
}) => {
  const renderGroup = () => {
    return (
      <div className={`${bem()} ${border ? BORDER_TOP_BOTTOM : ''}`}>
        {children}
      </div>
    )
  }
  const renderTitle = () => <div className={bem('title')}>{title}</div>
  if (title) {
    return (
      <>
        {renderTitle()}
        {renderGroup()}
      </>
    )
  }
  return renderGroup()
}
export default React.memo(CellGroup)
