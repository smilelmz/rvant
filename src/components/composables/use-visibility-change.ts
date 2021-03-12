/* eslint-disable @typescript-eslint/no-unused-vars */
import { Ref, useEffect } from 'react'
import { inBrowser } from '../utils'

// @Experimental
export function useVisibilityChange(
  target: Ref<Element | undefined>,
  onChange: (visible: boolean) => void
) {
  let observer: IntersectionObserver
  const isBrowser = () => {
    if (!inBrowser || !window.IntersectionObserver) {
      return false
    }
    return true
  }
  const init = () => {
    return new IntersectionObserver(
      (entries) => {
        onChange(entries[0].intersectionRatio > 0)
      },
      { root: document.body }
    )
  }

  const observe = () => {
    if (observer && target && 'current' in target && target.current) {
      observer.observe(target.current as Element)
    }
  }

  const unobserve = () => {
    if (observer && target && 'current' in target && target.current) {
      observer.unobserve(target.current)
    }
  }

  useEffect(() => {
    if (isBrowser()) init()
    observe()
    return () => {
      unobserve()
    }
  }, [])
}
