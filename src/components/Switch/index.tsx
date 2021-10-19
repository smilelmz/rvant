import React from 'react'
import { SwitchProps } from './types'
import { createNamespace, addUnit } from '../utils'
import Loading from '../Loading'

const [bem] = createNamespace('switch')
const Switch: React.FC<SwitchProps> = ({
  size,
  loading,
  disabled,
  value = false,
  activeColor,
  inactiveColor,
  activeValue = true,
  inactiveValue = false,
  change
}: SwitchProps) => {
  const isChecked = () => value === activeValue
  const onClick = () => {
    if (!disabled && !loading) {
      const newValue = isChecked() ? inactiveValue : activeValue
      change && change(newValue)
    }
  }
  const renderLoading = () => {
    if (loading) {
      const color = isChecked() ? activeColor : inactiveColor
      return <Loading className={bem('loading')} color={color} />
    }
  }
  const style = {
    fontSize: addUnit(size),
    backgroundColor: isChecked() ? activeColor : inactiveColor
  }
  return (
    <div
      role='switch'
      className={bem({
        on: isChecked(),
        loading,
        disabled
      })}
      style={style}
      aria-checked={isChecked()}
      onClick={onClick}
    >
      <div className={bem('node')}>{renderLoading()}</div>
    </div>
  )
}
export default React.memo(Switch)
