'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import style from './header.styl'

const Header = ({ children }) => (
  <div className={style.container}>
    <span>Udacity blog</span>
  </div>
)

Header.propTypes = {
  children: PropTypes.node
}

export default Header
