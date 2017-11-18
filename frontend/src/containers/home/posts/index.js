'use strict'

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchPosts, searchPostsByCategory } from 'redux-flow/reducers/posts/action-creators'
import Post from './post'

import style from './posts.styl'

class Posts extends PureComponent {
  componentDidMount () {
    this.search()
  }

  search = () => {
    const { searchPosts, searchPostsByCategory, categorySelected } = this.props

    if (categorySelected) {
      searchPostsByCategory(categorySelected)
    } else {
      searchPosts()
    }
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

const mapDispatchToProps = (dispatch) => bindActionCreators({ searchPosts, searchPostsByCategory }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
