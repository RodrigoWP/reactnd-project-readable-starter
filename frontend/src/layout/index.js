'use strict'

import React from 'react'
import Header from './header'
import Content from './content'

import style from './layout.styl'

const Layout = ({ children }) => (
  <div className={style.container}>
    {children}
  </div>
)

Layout.Header = Header
Layout.Content = Content

export default Layout
