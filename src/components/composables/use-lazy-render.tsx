import React, { useRef } from 'react'
import { useWatch } from './use-watch'

export function useLazyRender(show: boolean | undefined) {
  const inited = useRef(false)

  useWatch(
    show,
    (value: any) => {
      if (value) {
        inited.current = value
      }
    },
    { immediate: true }
  )

  return (render: () => JSX.Element) => () =>
    inited.current ? render() : <></>
}
