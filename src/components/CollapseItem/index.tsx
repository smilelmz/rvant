/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useImperativeHandle, useRef, useState } from 'react'
import { CollapseItemHandler, CollapseItemProps } from './types'
import { createNamespace, doubleRaf, raf } from '../utils'
import { CollapseContext } from '../context'
import Cell from '../Cell'
import { useWatch } from '../composables'

const [bem] = createNamespace('collapseitem')
const CollapseItem = (
  fieldProps: CollapseItemProps,
  collapseRef: React.Ref<CollapseItemHandler>
) => {
  const props: CollapseItemProps = {
    style: {},
    className: '',
    isLink: true,
    border: true,
    titleClass: '',
    valueClass: '',
    labelClass: '',
    index: 0,
    ...fieldProps
  }
  const { style, className, index, children } = props
  const wrapperRef = useRef<HTMLDivElement>()
  const contentRef = useRef<HTMLDivElement>()
  const parent = useContext(CollapseContext)

  if (!parent) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(
        '[Vant] <CollapseItem> must be a child component of <Collapse>.'
      )
    }
    return
  }

  const name = props.name ?? index
  const expanded = parent.isExpanded(name)

  const [show, setShow] = useState(expanded)

  const onTransitionEnd = () => {
    if (!expanded) {
      setShow(false)
    } else {
      wrapperRef.current!.style.height = ''
    }
  }

  const toggle = (newValue = !expanded) => {
    parent.toggle(name, newValue)
  }

  const onClickTitle = () => {
    if (!props.disabled && !props.readonly) {
      toggle()
    }
  }

  useWatch(expanded, (value, oldValue) => {
    if (oldValue === null) {
      return
    }

    if (value) {
      setShow(true)
    }

    raf(() => {
      if (!contentRef.current || !wrapperRef.current) {
        return
      }

      const { offsetHeight } = contentRef.current
      if (offsetHeight) {
        const contentHeight = `${offsetHeight}px`
        wrapperRef.current.style.height = value ? '0' : contentHeight

        // use double raf to ensure animation can start
        doubleRaf(() => {
          wrapperRef.current!.style.height = value ? contentHeight : '0'
        })
      } else {
        onTransitionEnd()
      }
    })
  })

  const renderTitle = () => {
    const { border, disabled, readonly } = props
    const attrs: Record<string, any> = {
      icon: props.icon,
      size: props.size,
      value: props.value,
      label: props.label,
      border: props.border,
      isLink: props.isLink,
      title: props.title,
      titleClass: props.titleClass,
      valueClass: props.valueClass,
      labelClass: props.labelClass,
      rightIcon: props.rightIcon,
      iconPrefix: props.iconPrefix,
      url: props.url
    }

    if (readonly) {
      attrs.isLink = false
    }
    if (disabled || readonly) {
      attrs.clickable = false
    }
    return (
      <Cell
        className={bem('title', {
          disabled,
          expanded,
          borderless: !border
        })}
        aria-expanded={String(expanded)}
        click={onClickTitle}
        {...attrs}
      />
    )
  }

  const renderContent = () => {
    const contentStyle = { display: !show ? 'none' : '' }
    return (
      <div
        ref={wrapperRef}
        className={bem('wrapper')}
        style={contentStyle}
        onTransitionEnd={onTransitionEnd}
      >
        <div ref={contentRef} className={bem('content')}>
          {children}
        </div>
      </div>
    )
  }

  useImperativeHandle(collapseRef, () => ({
    toggle
  }))

  return (
    <div
      style={style}
      className={`${bem({ border: index && props.border })} ${className || ''}`}
    >
      {renderTitle()}
      {renderContent()}
    </div>
  )
}

export default React.memo(React.forwardRef(CollapseItem))
