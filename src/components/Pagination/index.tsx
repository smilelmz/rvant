import React, { useMemo, useState } from 'react'
import { PageItem, PaginationProps } from './index.types'
import { BORDER, createNamespace } from '../utils'
import { useWatch } from '../composables'
import { useI18n } from '..'

function makePage(
  number: number,
  text: string | number,
  active?: boolean
): PageItem {
  return { number, text, active }
}

const [bem, t] = createNamespace('pagination')
const Pagination = ({
  style = {},
  className,
  prevText,
  nextText,
  forceEllipses,
  pageDesc,
  mode = 'multi',
  value = 0,
  pageCount = 0,
  totalItems = 0,
  itemsPerPage = 10,
  showPageSize = 5,
  renderPage,
  change
}: PaginationProps) => {
  const { messages } = useI18n()
  const [modelValue, setModelValue] = useState(value)
  const count = useMemo(() => {
    const count = +pageCount || Math.ceil(+totalItems / +itemsPerPage)
    return Math.max(1, count)
  }, [pageCount, totalItems, itemsPerPage])
  const pages = useMemo(() => {
    const items: PageItem[] = []
    const pageCount = count
    const curShowPageSize = +showPageSize

    if (mode !== 'multi') return items
    let startPage = 1
    let endPage = pageCount
    const isMaxSized = curShowPageSize < pageCount
    if (isMaxSized) {
      // 0 ==> 1+5  5 ==> 3+7
      startPage = Math.max(1, modelValue - Math.floor(curShowPageSize / 2))
      endPage = startPage + curShowPageSize - 1

      if (endPage > pageCount) {
        endPage = pageCount
        startPage = endPage - curShowPageSize + 1
      }
    }

    for (let num = startPage; num <= endPage; num++) {
      const page = makePage(num, num, num === modelValue)
      items.push(page)
    }

    if (isMaxSized && curShowPageSize > 0 && forceEllipses) {
      if (startPage > 1) {
        const prevPages = makePage(startPage - 1, '...')
        items.unshift(prevPages)
      }

      if (endPage < pageCount) {
        const nextPages = makePage(endPage + 1, '...')
        items.push(nextPages)
      }
    }

    return items
  }, [showPageSize, mode, modelValue, forceEllipses])

  const select = (page: number, emitChange?: boolean) => {
    const curPage = Math.min(count, Math.max(1, page))
    if (modelValue !== curPage) {
      setModelValue(curPage)
      if (emitChange) {
        change && change(curPage)
      }
    }
  }

  useWatch(
    modelValue,
    (value) => {
      select(value as number)
    },
    { immediate: true }
  )

  const renderDesc = () => {
    if (mode !== 'multi') {
      return (
        <li className={bem('page-desc')}>
          {pageDesc || `${modelValue}/${count}`}
        </li>
      )
    }
  }

  const simple = useMemo(() => mode !== 'multi', [mode])
  const onSelect = (value: number) => () => select(value, true)
  return (
    <ul style={style} className={`${bem({ simple })} ${className || ''}`}>
      <li
        className={`${bem('item', { disabled: value === 1 })} ${bem(
          'prev'
        )} ${BORDER}`}
        onClick={onSelect(value - 1)}
      >
        {prevText || t(messages, 'prev')}
      </li>
      {pages.map((page) => (
        <li
          className={`${bem('item', { active: page.active })} ${bem(
            'page'
          )} ${BORDER}`}
          onClick={onSelect(page.number)}
        >
          {renderPage ? renderPage(page) : page.text}
        </li>
      ))}
      {renderDesc()}
      <li
        className={`${bem('item', { disabled: value === count })} ${bem(
          'next'
        )} ${BORDER}`}
        onClick={onSelect(value + 1)}
      >
        {nextText || t(messages, 'next')}
      </li>
    </ul>
  )
}
export default React.memo(Pagination)
