import React from 'react'
import './header.scss'

const Header = () => {
  return (
    <div className='doc_header'>
      <div className='doc_row'>
        <div className='doc_logo'>
          <img src={require('@/assets/logo.png')} />
          <span>Vant</span>
        </div>
        <ul className='doc_nav_right'>
          <li className='nav_item'>
            <a>
              <img src={require('@/assets/github.svg')} />
            </a>
          </li>
          <li className='nav_item'>
            <a>
              <img src={require('@/assets/weapp.svg')} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default React.memo(Header)
