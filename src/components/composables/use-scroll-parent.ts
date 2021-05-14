import { Ref, useEffect, useRef } from 'react'
import { inBrowser } from '../utils'

type ScrollElement = HTMLElement | Window
const overflowScrollReg = /scroll|auto/i
const defaultRoot = inBrowser ? window : undefined

const isElement = (node: Element) => {
  const ELEMENT_NODE_TYPE = 1
  return (
    node.tagName !== 'HTML' &&
    node.tagName !== 'BODY' &&
    node.nodeType === ELEMENT_NODE_TYPE
  )
}
const getScrollParent = (
  el: Element,
  root: ScrollElement | undefined = defaultRoot
) => {
  let node = el

  while (node && node !== root && isElement(node)) {
    const { overflowY } = window.getComputedStyle(node)

    if (overflowScrollReg.test(overflowY)) {
      if (node.tagName !== 'BODY') {
        return node
      }

      const { overflowY: htmlOverflowY } = window.getComputedStyle(
        node.parentNode as Element
      )

      if (overflowScrollReg.test(htmlOverflowY)) {
        return node
      }
    }

    node = node.parentNode as Element
  }

  return root
}

export function useScrollParent(
  el: Ref<Element | undefined>,
  root: ScrollElement | undefined = defaultRoot
) {
  const scrollParent = useRef<Element | Window>()

  useEffect(() => {
    if (el && 'current' in el) {
      scrollParent.current = getScrollParent(el.current as Element, root)
    }
  })

  return scrollParent
}
