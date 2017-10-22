'use strict'

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchPosts } from 'redux-flow/reducers/posts/action-creators'
import Post from './post'

import style from './posts.styl'

class Posts extends PureComponent {
  componentDidMount () {
    const { searchPosts } = this.props

    searchPosts()
  }

  render () {
    const { posts } = this.props

    return (
      <div className={style.container}>
        {posts.map((post, index) => (
          <div key={index} className={style.postCol}>
            <Post data={post} />
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = ({ posts }) => ({
  posts: posts.postsData
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ searchPosts }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
