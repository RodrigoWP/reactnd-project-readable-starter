import React from 'react'
import PropTypes from 'prop-types'
import { monthDayFormatter } from 'utils/helpers'

import style from './header.styl'

const Header = ({ author, date }) => (
  <div className={style.container}>
    <span>{author}</span>
    <span>{monthDayFormatter(date)}</span>
  </div>
)

Header.propTypes = {
  author: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired
}

export default Header
