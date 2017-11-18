import React from 'react'
import PropTypes from 'prop-types'
import { monthDayFormatter } from 'utils/helpers'
import { CrudMenu } from 'widgets'

import style from './header.styl'

const Header = ({ postId, author, date, handleEditPost, handleRemovePost }) => (
  <div className={style.container}>
    <span>{author}</span>
    <span>{monthDayFormatter(date)}</span>
    <CrudMenu
      id={postId}
      handleEdit={handleEditPost}
      handleRemove={handleRemovePost}
    />
  </div>
)

Header.propTypes = {
  postId: PropTypes.string.isRequired,
  author: PropTypes.string,
  date: PropTypes.number,
  handleEditPost: PropTypes.func,
  handleRemovePost: PropTypes.func
}

export default Header
