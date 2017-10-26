import React from 'react'
import PropTypes from 'prop-types'

import style from './title.styl'

const Title = ({ title }) => (
  <div className={style.container}>
    <span>{title}</span>
  </div>
)

Title.propTypes = {
  title: PropTypes.string.isRequired
}

export default Title
