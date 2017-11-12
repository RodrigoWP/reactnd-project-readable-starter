import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { searchPost, searchComments } from 'redux-flow/reducers/post-details/action-creators'
import Header from './header'
import Title from './title'
import Posting from './posting'
import Comments from './comments'
import { PostScore } from 'components'

import style from './post-details.styl'

class PostDetails extends PureComponent {
  componentDidMount () {
    this.searchPost()
    this.countComments()
  }

  searchPost = () => {
    const { searchPost, match } = this.props
    const { postId } = match.params

    searchPost(postId)
  }

  countComments = () => {
    const { searchComments, match } = this.props
    const { postId } = match.params

    searchComments(postId)
  }

  editPost = (id) => {

  }

  removePost = (id) => {

  }

  render () {
    const { postDetail, match, countComments } = this.props
    const { postId } = match.params

    return (
      <div className={style.container}>
        <Header
          postId={postId}
          author={postDetail.author}
          date={postDetail.timestamp}
          handleEditPost={this.editPost}
          handleRemovePost={this.removePost}
        />
        <Title title={postDetail.title} />
        <Posting posting={postDetail.body} />
        <PostScore
          commentScore={countComments}
          voteScore={postDetail.voteScore}
          onClickVoteUp={() => {}}
          onClickVoteDown={() => {}}
        />
        <Comments
          postId={postId}
          author={postDetail.author}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ postDetails }) => ({
  postDetail: postDetails.post,
  countComments: postDetails.comments.length
})

const mapDispatchToProps = dispatch => bindActionCreators({ searchPost, searchComments }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails)
