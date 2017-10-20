import React from 'react'
import PropTypes from 'prop-types'
import { monthDayFormatter } from 'utils/helpers'

import icnActionMenu from 'icons/action-menu.svg'
import style from './post.styl'

const Post = ({ data }) => (
  <div className={style.container}>
    <img className={style.action} src={icnActionMenu} />
    <div className={style.title}>
      <span>Udacity is the best place to learn React</span>
    </div>
    <div className={style.body}>
      <span>Everyone says so after all.</span>
    </div>
    <div className={style.footer}>
      <div className={style.author}>
        <span>Rodrigo wippel</span>
        <span>{monthDayFormatter(1467166872634)}</span>
      </div>
    </div>
  </div>
)

Post.propTypes = {
  id: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  voteScore: PropTypes.number.isRequired,
  deleted: PropTypes.bool.isRequired
}

export default Post
