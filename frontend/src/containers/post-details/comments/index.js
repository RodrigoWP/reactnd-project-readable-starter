import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { apiGet, apiPost, apiDelete, apiPut } from 'utils/api'
import { monthDayFormatter } from 'utils/helpers'
import { Button, VoteScore, CrudMenu } from 'components'
import { v1 as uuid } from 'uuid'

import style from './comments.styl'

class Comments extends PureComponent {
  state = {
    idEdit: null,
    comments: [],
    comment: '',
    editMode: false
  }

  componentDidMount () {
    this.searchComments()
  }

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
    const { comment, editMode } = this.state
    const { postId, author } = this.props

    const payload = {
      timestamp: new Date(),
      body: comment,
      author: author,
      parentId: postId
    }

    if (editMode) {
      const { idEdit } = this.state

      await apiPut(`/comments/${idEdit}`, payload)
    } else {
      await apiPost('/comments', { id: uuid(), ...payload })
    }

    this.searchComments()
    this.clearComment()
  }

  clearComment = () => {
    this.setState({
      comment: '',
      editMode: false,
      idEdit: null
    })
  }

  voteComment = async (id) => {
    const { comments } = this.state
    const commentVoted = comments.find(comment => comment.id === id)

    await apiPost(`comments/${commentVoted.id}`, {
      option: commentVoted.voted ? 'downVote' : 'upVote'
    })
  }

  editComment = (id, comment) => {
    this.setState({
      comment,
      editMode: true,
      idEdit: id
    })
  }

  removeComment = async (id) => {
    await apiDelete(`comments/${id}`)
    this.searchComments()
  }

  render () {
    const { comment, comments, editMode } = this.state

    return (
      <div className={style.container}>
        <span>Comments</span>
        <textarea onChange={this.onChangeComment} value={comment} />
        <div className={style.actions}>
          <Button
            label={editMode ? 'Update' : 'Publish'}
            primary
            onClick={this.publishComment}
          />
          <Button
            label='Cancel'
            onClick={this.clearComment}
          />
        </div>
        <div className={style.comments}>
          {comments.map((comment, index) => (
            <div className={style.comment} key={index}>
              <CrudMenu
                id={comment.id}
                handleEdit={id => this.editComment(id, comment.body)}
                handleRemove={this.removeComment}
              />
              <div className={style.authorComment}>
                <span>{comment.author}</span>
                <span>{monthDayFormatter(comment.timestamp)}</span>
              </div>
              <div className={style.bodyComment}>
                <span>{comment.body}</span>
              </div>
              <div className={style.actionsComment}>
                <VoteScore
                  count={comment.voteScore}
                  active={comment.voted}
                  onClick={() => this.voteComment(comment.id)}
                />
              </div>
            </div>
          ))}
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
