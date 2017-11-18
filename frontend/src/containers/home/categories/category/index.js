'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import css from 'strclass'

import style from './category.styl'

const Category = ({ category, hightlight, onClick }) => (
  <span
    className={css({ [style.hightlight]: hightlight }, style.container)}
    onClick={() => onClick(category)}>
    {category}
  </span>
)

Category.propTypes = {
  category: PropTypes.string.isRequired,
  hightlight: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}

export default Category
