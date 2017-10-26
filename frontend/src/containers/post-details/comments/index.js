import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { apiGet } from 'utils/api'

import style from './comments.styl'

class Comments extends Component {
  state = {
    comments: [],
    comment: ''
  }

  componentDidMount () {
    this.searchComments()
  }

  searchComments = () => {
    const { postId } = this.props

    apiGet(`/posts/${postId}/comments`)
      .then(response => response.data)
      .then(data => {
        this.setState({
          comments: data
        })
      })
  }

  onChangeComment = (e) => {
    const { value } = e.target

    this.setState({
      comment: value
    })
  }

  render () {
    const { comment } = this.state

    return (
      <div>
        <div className={style.comments}>
          <span>Comments</span>
          <textarea onChange={this.onChangeComment} value={comment} />
        </div>
      </div>
    )
  }
}

Comments.propTypes = {
  postId: PropTypes.string.isRequired
}

export default Comments
