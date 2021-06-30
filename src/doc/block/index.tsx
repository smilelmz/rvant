import React from 'react'
import './index.scss'

interface IProps {
  title?: string
  children?: React.ReactNode | React.ReactNode[]
  card?: boolean
}
const DemoBlock = (
  { title, children, card = false }: IProps,
  ref: React.Ref<HTMLDivElement>
) => {
  return (
    <div className='demo-block' ref={ref}>
      {title ? <div className='demo-block__title'>{title}</div> : ''}
      {card ? <div className='demo-block__card'>{children}</div> : children}
    </div>
  )
}

export default React.memo(React.forwardRef(DemoBlock))
