/* eslint-disable react/no-danger */
import React from 'react'
import './index.scss'

interface IProps {
  html?: string
}

const DocPanel = ({ html = '' }: IProps) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export default React.memo(DocPanel)
