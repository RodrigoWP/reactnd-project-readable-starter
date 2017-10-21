import React from 'react'
import PropTypes from 'prop-types'
import { monthDayFormatter } from 'utils/helpers'
import PostMenu from './post-menu'

import style from './post.styl'

const Post = ({ data }) => (
  <div className={style.container}>
    <PostMenu />
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
  id: PropTypes.string,
  timestamp: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
  voteScore: PropTypes.number,
  deleted: PropTypes.bool
}

export default Post
