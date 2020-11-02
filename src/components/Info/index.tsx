import React from 'react'
import { BASE_PREFIX } from '../utils/constant'
import { isDef } from '../utils'
import { InfoProps } from './index.types'
import classnames from '../utils/classNames'

const baseClass = `${BASE_PREFIX}info`
const Info: React.FC<InfoProps> = ({ dot, info }) => {
  const showInfo = isDef(info) && info !== ''
  if (!dot && !showInfo) {
    return null
  }
  return <div className={classnames(baseClass, [])}>{dot ? '' : info}</div>
}
export default Info
