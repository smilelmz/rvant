/* eslint-disable react/no-danger */
import React from 'react'
import { Helmet } from 'umi'
import './index.scss'

interface IProps {
  html?: string
  title?: string
}

const DocPanel = ({ html = '', title = '' }: IProps) => {
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Vant - 轻量、可靠的移动端组件库</title>
        <meta name='keywords' content='Mobile UI Components built on React' />
        <meta httpEquiv='Cache-Control' content='no-cache' />
        <meta httpEquiv='Pragma' content='no-cache' />
        <meta httpEquiv='Expires' content='0' />
      </Helmet>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export default React.memo(DocPanel)
