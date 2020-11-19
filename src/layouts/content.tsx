import React from 'react'
import './content.scss'

interface IProps {
  children: any
}

const Content = ({ children }: IProps) => {
  return (
    <div className='doc_content doc_row doc_content--simulator'>
        <section>{children}</section>
    </div>
  )
}

export default React.memo(Content)
