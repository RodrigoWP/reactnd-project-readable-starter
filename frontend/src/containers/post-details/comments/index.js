import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { searchComments } from 'redux-flow/reducers/post-details/action-creators'
import { apiPost, apiDelete, apiPut } from 'utils/api'
import { monthDayFormatter } from 'utils/helpers'
import { Button, VoteScore, CrudMenu } from 'components'
import { v1 as uuid } from 'uuid'

import style from './comments.styl'

class Comments extends PureComponent {
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

  voteUp = async (id) => {
    await apiPost(`comments/${id}`, {
      option: 'upVote'
    })

    this.searchComments()
  }

  voteDown = async (id) => {
    await apiPost(`comments/${id}`, {
      option: 'downVote'
    })

    this.searchComments()
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
    const { comment, editMode } = this.state
    const { comments } = this.props

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
                  onClickUp={() => this.voteUp(comment.id)}
                  onClickDown={() => this.voteDown(comment.id)}
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

const mapDispatchToProps = dispatch => bindActionCreators({ searchComments }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
