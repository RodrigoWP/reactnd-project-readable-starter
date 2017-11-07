import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { searchPost } from 'redux-flow/reducers/post-details/action-creators'
import Header from './header'
import Title from './title'
import Posting from './posting'
import Comments from './comments'

import style from './post-details.styl'

class PostDetails extends Component {
  state = { }

  componentDidMount () {
    this.searchPost()
  }

  searchPost = () => {
    const { searchPost, match } = this.props
    const { postId } = match.params

    searchPost(postId)
  }

  editPost = (id) => {

  }

  removePost = (id) => {

  }

  render () {
    const { postDetail, match } = this.props
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
        <Comments postId={postId} author={postDetail.author} />
      </div>
    )
  }
}

const mapStateToProps = ({ postDetails }) => ({
  postDetail: postDetails.post
})

const mapDispatchToProps = dispatch => bindActionCreators({ searchPost }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails)
