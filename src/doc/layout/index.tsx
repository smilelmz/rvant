import React from 'react'
import './index.scss'

interface IProps {
  title?: string
  children?: React.ReactNode | React.ReactNode[]
  className?: string
}

const MobileLayout = ({ title = '', children, className }: IProps) => {
  return (
    <div>
      <div className='demo-nav'>
        <svg viewBox='0 0 1000 1000' className='demo-nav__back'>
          <path
            fill='#969799'
            fillRule='evenodd'
            d='M296.114 508.035c-3.22-13.597.473-28.499 11.079-39.105l333.912-333.912c16.271-16.272 42.653-16.272 58.925 0s16.272 42.654 0 58.926L395.504 498.47l304.574 304.574c16.272 16.272 16.272 42.654 0 58.926s-42.654 16.272-58.926 0L307.241 528.058a41.472 41.472 0 0 1-11.127-20.023z'
          />
        </svg>
        <div className='demo-nav__title'>{title ?? '组件标题'}</div>
      </div>
      <section className={`doc-demo-section ${className || ''}`}>
        {children}
      </section>
    </div>
  )
}

export default React.memo(MobileLayout)
