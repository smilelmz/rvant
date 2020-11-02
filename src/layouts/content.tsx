import React from 'react'
import './content.scss'

interface IProps {
  children: any
}

const Content = ({ children }: IProps) => {
  return (
    <div className='doc_content'>
      <div className='doc_content__inner'>
        <section>{children}</section>
      </div>
    </div>
  )
}

export default Content
