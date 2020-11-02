import React from 'react'
import { history } from 'umi'
import './nav.scss'

interface IProps {
  menus?: any[]
  pathname?: string
}

const Nav = ({ menus = [], pathname = '' }: IProps) => {
  const navigate = (url: string) => {
    if (url) history.push(url)
  }
  return (
    <div className='doc_nav'>
      {menus.map((item: any) => {
        return (
          <div key={item.name} className='doc_nav_group'>
            <div className='doc_nav_title'>{item.name}</div>
            {item.children.map((child: any) => {
              const names = child.name.split(' ')
              return (
                <div
                  onClick={() => navigate(child.url)}
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

export default Nav
