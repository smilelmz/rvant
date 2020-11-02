import React from 'react'
import { BASE_PREFIX, BORDER_TOP_BOTTOM } from '../utils/constant'
import { CellGroupProps } from './index.types'
import classnames from '../utils/classNames'

const baseClass = `${BASE_PREFIX}cell-group`
const CellGroup: React.FC<CellGroupProps> = ({
  title,
  border = true,
  children
}) => {
  let className = classnames(baseClass)
  if (border) className = `${className} ${BORDER_TOP_BOTTOM}`
  const Group = <div className={className}>{children}</div>
  if (title) {
    return (
      <div>
        <div className={classnames(`${baseClass}__title`)}>{title}</div>
        {Group}
      </div>
    )
  }
  return Group
}
export default CellGroup
