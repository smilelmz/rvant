import { Ref, useEffect, useRef } from 'react'

type ScrollElement = HTMLElement | Window
const overflowScrollReg = /scroll|auto/i

const isElement = (node: Element) => {
  const ELEMENT_NODE_TYPE = 1
  return node.tagName !== 'HTML' && node.nodeType === ELEMENT_NODE_TYPE
}
const getScrollParent = (el: Element, root: ScrollElement = window) => {
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

export function useScrollParent(el: Ref<Element | undefined>) {
  const scrollParent = useRef<Element | Window>()

  useEffect(() => {
    if (el && 'current' in el) {
      scrollParent.current = getScrollParent(el.current as Element)
    }
  })

  return scrollParent
}
