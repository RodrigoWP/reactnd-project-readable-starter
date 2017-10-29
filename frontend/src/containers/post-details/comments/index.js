import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { apiGet, apiPost } from 'utils/api'
import { Button } from 'components'
import { v1 as uuid } from 'uuid'

import style from './comments.styl'

class Comments extends PureComponent {
  state = {
    comments: [],
    comment: ''
  }

  componentDidMount () {
    this.searchComments()
  }

  // componentWillReceiveProps (nextProps) {
  //   const { postId } = nextProps

  //   this.searchComments(postId)
  // }

  searchComments = async () => {
    const { postId } = this.props
    const { data } = await apiGet(`/posts/${postId}/comments`)

    this.setState({
      comments: data
    })
  }

  onChangeComment = (e) => {
    const { value } = e.target

    this.setState({
      comment: value
    })
  }

  publishComment = async () => {
    const { comment } = this.state
    const { postId, author } = this.props

    await apiPost('/comments', {
      id: uuid(),
      timestamp: new Date(),
      body: comment,
      author: author,
      parentId: postId
    })

    this.searchComments()
    this.clearComment()
  }

  clearComment = () => {
    this.setState({
      comment: ''
    })
  }

  render () {
    const { comment, comments } = this.state

    return (
      <div>
        <div className={style.comments}>
          <span>Comments</span>
          <textarea onChange={this.onChangeComment} value={comment} />
          <div className={style.actions}>
            <Button
              label='Publish'
              primary
              onClick={this.publishComment}
            />
            <Button
              label='Cancel'
              onClick={this.clearComment}
            />
            <div>
              {comments.map((comment, index) => (
                <span>{comment.body}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Comments.propTypes = {
  postId: PropTypes.string,
  author: PropTypes.string
}

export default Comments
