'use strict'

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchPosts, searchPostsByCategory } from 'redux-flow/reducers/posts/action-creators'
import Post from './post'
import EmptyMessage from './empty-message'

import style from './post-list.styl'

class PostList extends PureComponent {
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
    const { posts, editPost } = this.props

    return (
      <div className={style.container}>
        {posts.length === 0 ? <EmptyMessage />
          : posts.map((post, index) => (
            <div key={index} className={style.postCol}>
              <Post data={post} editPost={editPost} />
            </div>
          ))
        }
      </div>
    )
  }
}

PostList.propTypes = {
  categorySelected: PropTypes.string,
  editPost: PropTypes.func
}

const mapStateToProps = ({ posts }) => ({
  posts: posts.postsData
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ searchPosts, searchPostsByCategory }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
