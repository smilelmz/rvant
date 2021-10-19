import React from 'react'
import { CollapseProps } from './types'
import { createNamespace } from '../utils'
import { CollapseContext } from '../context'

const [bem] = createNamespace('collapse')
const Collapse = (fieldProps: CollapseProps) => {
  const props: CollapseProps = {
    style: {},
    className: '',
    border: true,
    value: '',
    ...fieldProps
  }
  const { style, className, children } = props
  const updateName = (name: number | string | (number | string)[]) => {
    props.change && props.change(name)
  }
  const toggle = (name: number | string, expanded: boolean) => {
    const { accordion, value } = props

    if (accordion) {
      updateName(name === value ? '' : name)
    } else if (expanded) {
      updateName((value as (number | string)[]).concat(name))
    } else {
      updateName(
        (value as (number | string)[]).filter(
          (activeName) => activeName !== name
        )
      )
    }
  }
  const isExpanded = (name: number | string) => {
    const { accordion, value } = props

    if (process.env.NODE_ENV !== 'production') {
      if (accordion && Array.isArray(value)) {
        console.error(
          '[Vant] Collapse: "v-model" should not be Array in accordion mode'
        )
        return false
      }
      if (!accordion && !Array.isArray(value)) {
        console.error(
          '[Vant] Collapse: "v-model" should be Array in non-accordion mode'
        )
        return false
      }
    }

    return accordion
      ? value === name
      : (value as (number | string)[]).includes(name)
  }
  return (
    <CollapseContext.Provider value={{ toggle, isExpanded }}>
      <div style={style} className={`${bem()} ${className || ''}`}>
        {React.Children.map(children, (child: any, index: number) => {
          return React.cloneElement(child, {
            index
          })
        })}
      </div>
    </CollapseContext.Provider>
  )
}
export default React.memo(Collapse)
