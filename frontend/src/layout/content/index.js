'use strict'

import React from 'react'

import style from './content.styl'

const Content = ({ children }) => (
  <div className={style.container}>
    {children}
  </div>
)

export default Content
