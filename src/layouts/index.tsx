import React from 'react'
import { withRouter } from 'umi'
import menus from './menus.json'
import Header from './header'
import Nav from './nav'
import Content from './content'
import Simulator from './simulator'
import './index.scss'

export default withRouter(({ location, children }) => {
  const { pathname } = location
  let curMenu = {
    name: '',
    url: '',
    m_url: ''
  }
  let hideLayout = true
  for (let i = 0; i < menus.length; i++) {
    for (let j = 0; j < menus[i].children.length; j++) {
      if (pathname === menus[i].children[j].url) {
        hideLayout = false
        curMenu = menus[i].children[j]
        break
      }
    }
    if (!hideLayout) break
  }
  if (hideLayout) {
    document.body.className = 'mobile_body'
    return <div>{children}</div>
  }
  document.body.className = ''
  return (
    <div className='doc_container'>
      <Header />
      <Nav menus={menus} pathname={pathname} />
      <Content>{children}</Content>
      <Simulator url={curMenu.m_url} />
    </div>
  )
})
