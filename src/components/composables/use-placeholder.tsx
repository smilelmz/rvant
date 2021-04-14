import React, { Ref } from 'react'
import { useHeight } from './use-height'
import { BEM } from '../utils/create/bem'

export function usePlaceholder(contentRef: Ref<Element | undefined>, bem: BEM) {
  const height = useHeight(contentRef)

  return (renderContent: () => JSX.Element) => (
    <div
      className={bem('placeholder')}
      style={{ height: height.current ? `${height.current}px` : undefined }}
    >
      {renderContent()}
    </div>
  )
}
