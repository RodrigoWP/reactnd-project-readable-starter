'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import css from 'strclass'

import style from './category-badge.styl'

const CategoryBadge = ({ category, hightlight, onClick }) => (
  <span
    className={css({ [style.hightlight]: hightlight }, style.container)}
    onClick={() => onClick(category)}>
    {category}
  </span>
)

CategoryBadge.propTypes = {
  category: PropTypes.string,
  hightlight: PropTypes.bool,
  onClick: PropTypes.func
}

export { CategoryBadge }
