'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import style from './category-tag.styl'

const CategoryTag = ({ category }) => (
  <span className={style.container}>
    <span className={style.tag}>
      {category}
    </span>
  </span>
)

CategoryTag.propTypes = {
  category: PropTypes.string.isRequired
}

export default CategoryTag
