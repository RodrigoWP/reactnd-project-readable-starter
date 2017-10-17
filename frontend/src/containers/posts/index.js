import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchPosts } from 'redux-flow/reducers/posts/action-creators'

class Posts extends PureComponent {
  componentDidMount () {
    const { searchPosts } = this.props

    searchPosts()
  }

  render () {
    const { posts } = this.props

    console.log('Posts: ', posts)

    return (
      <h1>Posts</h1>
    )
  }
}

const mapStateToProps = ({ posts }) => ({
  posts: posts.postsData
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ searchPosts }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
