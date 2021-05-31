import React, { useImperativeHandle } from 'react'
import {
  CheckboxGroupProps,
  CheckboxGroupToggleAllOptions,
  CheckboxGroupHandle
} from './index.types'
import { createNamespace } from '../utils'
import { useRefs } from '../composables'
import { CheckboxHandler } from '../Checkbox/index.types'
import { CheckboxGroupContext } from '../context'

const [bem] = createNamespace('checkbox-group')
const CheckboxGroup = (
  {
    value = [],
    max,
    disabled,
    direction,
    iconSize,
    checkedColor,
    children,
    change
  }: CheckboxGroupProps,
  ref: React.Ref<CheckboxGroupHandle>
) => {
  const [checkboxRefs, setCheckboxRefs] = useRefs<React.Ref<CheckboxHandler>>()
  const toggleAll = (options: CheckboxGroupToggleAllOptions = {}) => {
    if (typeof options === 'boolean') {
      options = { checked: options }
    }
    const { checked, skipDisabled } = options
    const status = checkboxRefs.current.map((item) => {
      const curItem = (item as unknown) as CheckboxHandler

      if (!curItem.bindGroup) {
        return false
      }
      if (curItem.disabled && skipDisabled) {
        return curItem.checked
      }
      return checked ?? !curItem.checked
    })
    const names: (string | undefined)[] = []
    status.forEach((item, index) => {
      const curItem = (checkboxRefs.current[
        index
      ] as unknown) as CheckboxHandler
      if (item) names.push(curItem.name)
    })
    change && change(names)
  }
  useImperativeHandle(ref, () => ({
    toggleAll
  }))
  return (
    <CheckboxGroupContext.Provider
      value={{
        modelValue: value,
        direction,
        disabled,
        iconSize,
        max,
        checkedColor,
        updateGroupValue: change
      }}
    >
      <div className={bem([direction])}>
        {React.Children.map(children, (child: any, index: number) => {
          return React.cloneElement(child, {
            ref: setCheckboxRefs(index)
          })
        })}
      </div>
    </CheckboxGroupContext.Provider>
  )
}
export default React.memo(React.forwardRef(CheckboxGroup))
