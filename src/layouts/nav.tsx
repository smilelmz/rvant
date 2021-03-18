import React, { useState, useEffect } from 'react'
import { history, Helmet } from 'umi'
import './nav.scss'

interface IProps {
  menus?: any[]
  pathname?: string
}

const Nav = ({ menus = [], pathname = '' }: IProps) => {
  const [title, setTitle] = useState('')
  const getTitle = () => {
    const { pathname } = window.location
    for (let i = 0; i < menus.length; i++) {
      const list = menus[i].children
      for (let j = 0; j < list.length; j++) {
        if (list[j].url === pathname) {
          return list[j].name
        }
      }
    }
    return ''
  }
  useEffect(() => {
    setTitle(getTitle())
  }, [])
  const navigate = (url: string, title: string) => {
    if (url) history.push(url)
    setTitle(title || '')
  }
  return (
    <div className='doc_nav'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>
          {title ? `${title} - Vant` : 'Vant - 轻量、可靠的移动端组件库'}
        </title>
        <meta name='keywords' content='Mobile UI Components built on React' />
        <meta httpEquiv='Cache-Control' content='no-cache' />
        <meta httpEquiv='Pragma' content='no-cache' />
        <meta httpEquiv='Expires' content='0' />
      </Helmet>
      {menus.map((item: any) => {
        return (
          <div key={item.name} className='doc_nav_group'>
            <div className='doc_nav_title'>{item.name}</div>
            {item.children.map((child: any) => {
              const names = child.name.split(' ')
              return (
                <div
                  onClick={() => navigate(child.url, child.name)}
                  className='doc_nav_item'
                  key={child.name}
                >
                  <div
                    className={`item_inner ${
                      pathname === child.url ? 'active' : ''
                    }`}
                  >
                    {`${names[0]} `}
                    {names.length >= 1 ? <span>{names[1]}</span> : ''}
                  </div>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default React.memo(Nav)
