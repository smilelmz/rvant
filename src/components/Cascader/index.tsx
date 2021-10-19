import React, { useEffect, useState } from 'react'
import { CascaderOption, CascaderProps, CascaderTab } from './types'
import { createNamespace, extend } from '../utils'
import Icon from '../Icon'
import Tab from '../Tab'
import { useI18n } from '../locale'
import Tabs from '../Tabs'
import { useDeepWatch, useWatch } from '../composables'

const [bem, t] = createNamespace('cascader')
const Cascader = (fieldProps: CascaderProps) => {
  const props: CascaderProps = {
    style: {},
    className: '',
    closeable: true,
    swipeable: true,
    options: [],
    closeIcon: 'cross',
    ...fieldProps
  }
  const { style, className } = props
  const [tabs, setTabs] = useState([] as CascaderTab[])
  const [activeTab, setActiveTab] = useState(0)
  const { messages } = useI18n()

  const { text: textKey, value: valueKey, children: childrenKey } = extend(
    {
      text: 'text',
      value: 'value',
      children: 'children'
    },
    props.fieldNames
  )

  const getSelectedOptionsByValue = (
    options: CascaderOption[],
    value: string | number
  ): CascaderOption[] | undefined => {
    for (let i = 0; i < options.length; i++) {
      const option = options[i]

      if (option[valueKey] === value) {
        return [option]
      }

      if (option[childrenKey]) {
        const selectedOptions = getSelectedOptionsByValue(
          option[childrenKey],
          value
        )
        if (selectedOptions) {
          return [option, ...selectedOptions]
        }
      }
    }
  }

  const updateTabs = () => {
    if (props.value || props.value === 0) {
      const selectedOptions = getSelectedOptionsByValue(
        props.options,
        props.value
      )

      if (selectedOptions) {
        let optionsCursor = props.options
        const newTabs = selectedOptions.map((option) => {
          const tab = {
            options: optionsCursor,
            selectedOption: option
          }

          const next = optionsCursor.find(
            (item) => item[valueKey] === option[valueKey]
          )
          if (next) {
            optionsCursor = next[childrenKey]
          }

          return tab
        })

        if (optionsCursor) {
          newTabs.push({
            options: optionsCursor,
            selectedOption: null
          })
        }

        setTabs(newTabs)
        setActiveTab(newTabs.length - 1)
        return
      }
    }

    setTabs([
      {
        options: props.options,
        selectedOption: null
      }
    ])
  }

  const onSelect = (option: CascaderOption, tabIndex: number) => {
    let newTabs = tabs
    newTabs[tabIndex].selectedOption = option

    if (newTabs.length > tabIndex + 1) {
      newTabs = newTabs.slice(0, tabIndex + 1)
    }

    if (option[childrenKey]) {
      const nextTab = {
        options: option[childrenKey],
        selectedOption: null
      }

      if (newTabs[tabIndex + 1]) {
        newTabs[tabIndex + 1] = nextTab
      } else {
        newTabs.push(nextTab)
      }

      setActiveTab(activeTab + 1)
    }
    setTabs(newTabs)
    const selectedOptions = newTabs
      .map((tab) => tab.selectedOption)
      .filter(Boolean)

    const eventParams = {
      value: option[valueKey],
      tabIndex,
      selectedOptions
    }
    props.change && props.change(eventParams)

    if (!option[childrenKey]) {
      props.finish && props.finish(eventParams)
    }
  }

  const onClose = () => props.close && props.close()

  const onClickTab = (tabIndex: number, title: string) => {
    props.clickTab && props.clickTab(tabIndex, title)
  }

  const renderHeader = () => (
    <div className={bem('header')}>
      <h2 className={bem('title')}>{props.title}</h2>
      {props.closeable ? (
        <Icon
          name={props.closeIcon}
          className={bem('close-icon')}
          click={onClose}
        />
      ) : null}
    </div>
  )

  const renderOptions = (
    options: CascaderOption[],
    selectedOption: CascaderOption | null,
    tabIndex: number
  ) => {
    const renderOption = (option: CascaderOption) => {
      const isSelected =
        selectedOption && option[valueKey] === selectedOption[valueKey]

      return (
        <li
          key={option[valueKey]}
          className={bem('option', { selected: isSelected })}
          style={{ color: isSelected ? props.activeColor : undefined }}
          onClick={() => onSelect(option, tabIndex)}
        >
          <span>{option[textKey]}</span>
          {isSelected ? (
            <Icon name='success' className={bem('selected-icon')} />
          ) : null}
        </li>
      )
    }

    return <ul className={bem('options')}>{options.map(renderOption)}</ul>
  }

  const renderTab = (tab: CascaderTab, tabIndex: number) => {
    const { options, selectedOption } = tab
    const title = selectedOption
      ? selectedOption[textKey]
      : props.placeholder || t(messages, 'select')
    return (
      <Tab
        key={tabIndex}
        title={title}
        titleClass={bem('tab', {
          unselected: !selectedOption
        })}
      >
        {renderOptions(options, selectedOption, tabIndex)}
      </Tab>
    )
  }

  const renderTabs = () => (
    <Tabs
      active={activeTab}
      change={(v) => setActiveTab(v as number)}
      animated
      className={bem('tabs')}
      color={props.activeColor}
      swipeThreshold={0}
      swipeable={props.swipeable}
      click={onClickTab}
    >
      {tabs.map(renderTab)}
    </Tabs>
  )

  useEffect(() => {
    updateTabs()
  }, [])

  useDeepWatch(props.options, updateTabs)

  useWatch(props.value, (value) => {
    if (value || value === 0) {
      const values = tabs.map((tab) => tab.selectedOption?.[valueKey])
      if (values.includes(value)) {
        return
      }
    }
    updateTabs()
  })

  return (
    <div style={style} className={`${bem()} ${className || ''}`}>
      {renderHeader()}
      {renderTabs()}
    </div>
  )
}
export default React.memo(Cascader)
