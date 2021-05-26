import React, { MutableRefObject, useLayoutEffect, useState } from 'react'
import { BEM } from '../utils/create/bem'
import { getRect } from './rect'

export function usePlaceholder(
  contentRef: MutableRefObject<HTMLElement | null | undefined>,
  bem: BEM
) {
  const [height, setHeight] = useState<number | undefined>(undefined)
  useLayoutEffect(() => {
    setHeight(getRect(contentRef).height)
  }, [contentRef])
  const placeholder = (renderContent: () => JSX.Element) => (
    <div
      className={bem('placeholder')}
      style={{ height: height ? `${height}px` : undefined }}
    >
      {renderContent()}
    </div>
  )

  return placeholder
}
