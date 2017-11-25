import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { searchPost, searchComments, voteUpPost, voteDownPost } from 'redux-flow/reducers/post-details/action-creators'
import Header from './header'
import Title from './title'
import Posting from './posting'
import Comments from './comments'
import { PostScore } from 'widgets'
import PostForm from '../posts/post-form'
import { apiDelete } from 'utils/api'
import { Notify } from 'components'

import style from './post-details.styl'

class PostDetails extends PureComponent {
  state = {
    postFormOpen: false
  }

  componentDidMount () {
    this.searchPost()
    this.countComments()
  }

  searchPost = async () => {
    const { searchPost, match } = this.props
    const { postId } = match.params

    await searchPost(postId)
    this.validatePostDetailExists()
  }

  validatePostDetailExists = () => {
    const { postDetail } = this.props
    const isEmpty = Object.keys(postDetail).length === 0

    if (isEmpty) {
      this.closePostDetail()
    }
  }

  countComments = () => {
    const { searchComments, match } = this.props
    const { postId } = match.params

    searchComments(postId)
  }

  openEditForm = () => {
    this.toggleForm()
  }

  closeEditForm = () => {
    this.toggleForm()
  }

  toggleForm = () => {
    this.setState(state => ({
      postFormOpen: !state.postFormOpen
    }))
  }

  removePost = async (id) => {
    await apiDelete(`posts/${id}`)
    this.closePostDetail()
    Notify.success('Post removed with success')
  }

  closePostDetail = () => {
    const { history } = this.props

    history.replace('/')
  }

  render () {
    const { postFormOpen } = this.state
    const { postDetail, match, countComments, voteUpPost, voteDownPost } = this.props
    const { postId } = match.params

    return (
      <div className={style.container}>
        <div className={style.detailBody}>
          <Header
            postId={postId}
            author={postDetail.author}
            date={postDetail.timestamp}
            handleEditPost={this.openEditForm}
            handleRemovePost={this.removePost}
          />
          <Title
            title={postDetail.title}
            category={postDetail.category}
          />
          <Posting posting={postDetail.body} />
          <PostScore
            commentScore={countComments}
            voteScore={postDetail.voteScore}
            onClickVoteUp={() => voteUpPost(postId)}
            onClickVoteDown={() => voteDownPost(postId)}
          />
          <Comments
            postId={postId}
            author={postDetail.author}
          />
        </div>
        {postFormOpen &&
          <PostForm
            postId={postId}
            onClickClose={this.closeEditForm}
            handleRefresh={this.searchPost}
          />
        }
      </div>
    )
  }
}

const mapStateToProps = ({ postDetails }) => ({
  postDetail: postDetails.post,
  countComments: postDetails.comments.length
})

const mapDispatchToProps = dispatch => bindActionCreators({ searchPost, searchComments, voteUpPost, voteDownPost }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostDetails))
