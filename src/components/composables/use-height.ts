import { MutableRefObject, useEffect, useRef } from 'react'
import { getRect } from './rect'

export const useHeight = (
  element: HTMLElement | MutableRefObject<HTMLElement | null | undefined>
) => {
  const height = useRef<number>()

  useEffect(() => {
    height.current = getRect(element).height
  }, [])

  return height
}
