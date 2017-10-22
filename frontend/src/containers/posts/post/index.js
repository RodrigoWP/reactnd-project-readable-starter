import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { monthDayFormatter } from 'utils/helpers'
import PostMenu from './post-menu'
import { apiGet } from 'utils/api'
import VoteScore from '../vote-score'
import CommentScore from '../comment-score'

import style from './post.styl'

class Post extends Component {
  state = {
    commentScore: 0
  }

  componentDidMount () {
    this.searchComments()
  }

  searchComments = () => {
    const { data } = this.props
    const { id } = data

    apiGet(`posts/${id}/comments`)
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          commentScore: data.length
        })
      })
  }

  render () {
    const { data } = this.props
    const { commentScore } = this.state

    return (
      <div className={style.container}>
        <PostMenu postId={data.id} />
        <div className={style.title}>
          <span>{data.title}</span>
        </div>
        <div className={style.body}>
          <span>{data.body}</span>
        </div>
        <div className={style.footer}>
          <div className={style.author}>
            <span>{data.author}</span>
            <span>{monthDayFormatter(data.timestamp)}</span>
          </div>
          <div className={style.score}>
            <CommentScore count={commentScore} />
            <VoteScore count={data.voteScore} />
          </div>
        </div>
      </div>
    )
  }
}

Post.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    timestamp: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
    voteScore: PropTypes.number,
    deleted: PropTypes.bool
  })
}

export default Post
