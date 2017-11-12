import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { monthDayFormatter } from 'utils/helpers'
import { Button, VoteScore, CrudMenu } from 'components'
import {
  searchComments,
  publishNewComment,
  publishEditComment,
  deleteComment,
  voteUpComment,
  voteDownComment
} from 'redux-flow/reducers/post-details/action-creators'

import style from './comments.styl'

class Comments extends Component {
  state = {
    idEdit: null,
    comment: '',
    editMode: false
  }

  componentDidMount () {
    this.searchComments()
  }

  searchComments = () => {
    const { postId, searchComments } = this.props

    searchComments(postId)
  }

  onChangeComment = (e) => {
    const { value } = e.target

    this.setState({
      comment: value
    })
  }

  publishComment = () => {
    const { comment, editMode, idEdit } = this.state
    const { postId, author, publishNewComment, publishEditComment } = this.props

    const payload = {
      timestamp: new Date(),
      body: comment,
      author: author,
      parentId: postId
    }

    if (!editMode) {
      publishNewComment(payload)
    } else {
      publishEditComment(idEdit, payload)
    }

    this.clearComment()
  }

  clearComment = () => {
    this.setState({
      comment: '',
      editMode: false,
      idEdit: null
    })
  }

  editComment = (id, comment) => {
    this.setState({
      comment,
      editMode: true,
      idEdit: id
    })
  }

  render () {
    const { comment, editMode } = this.state
    const { comments, voteUpComment, voteDownComment, deleteComment } = this.props

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
                handleRemove={deleteComment}
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
                  onClickUp={() => voteUpComment(comment.id)}
                  onClickDown={() => voteDownComment(comment.id)}
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

const mapStateToProps = ({ postDetails }) => ({
  comments: postDetails.comments
})

const mapDispatchToProps = dispatch => bindActionCreators({
  searchComments,
  publishNewComment,
  publishEditComment,
  deleteComment,
  voteUpComment,
  voteDownComment
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
