import React from 'react'
import PropTypes from 'prop-types'
import { CategoryBadge } from 'components'

import style from './title.styl'

const Title = ({ title, category }) => (
  <div className={style.container}>
    <CategoryBadge category={category} />
    <span>{title}</span>
  </div>
)

Title.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string
}

export default Title
