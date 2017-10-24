import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { searchPosts } from 'redux-flow/reducers/posts/action-creators'
import { monthDayFormatter } from 'utils/helpers'
import PostMenu from './post-menu'
import { apiGet, apiPost } from 'utils/api'
import VoteScore from '../vote-score'
import CommentScore from '../comment-score'

import style from './post.styl'

class Post extends Component {
  state = {
    commentScore: 0,
    voted: false
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

  toggleVote = () => {
    this.setState({
      voted: !this.state.voted
    })
  }

  votePost = () => {
    const { data, searchPosts } = this.props
    const { id } = data

    apiPost(`posts/${id}`, {
      option: this.state.voted ? 'downVote' : 'upVote'
    })
    .then(this.toggleVote)
    .then(searchPosts)

  }

  navigateToPost = () => {
    const { history, data } = this.props
    const { id } = data
    
    history.push(`/${id}`)
  }

  render () {
    const { data } = this.props
    const { commentScore, voted } = this.state

    return (
      <div className={style.container}>
        <PostMenu postId={data.id} />
        <div className={style.title} onClick={this.navigateToPost}>
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
            <VoteScore count={data.voteScore} active={voted} onClick={this.votePost} />
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ searchPosts }, dispatch)

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

export default connect(null, mapDispatchToProps)(withRouter(Post))
