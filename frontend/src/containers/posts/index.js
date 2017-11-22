'use strict'

import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchPostsByCategory } from 'redux-flow/reducers/posts/action-creators'
import { Button } from 'components'
import Categories from './categories'
import PostList from './post-list'
import PostForm from './post-form'

import icnNewPost from 'icons/icn-new-post.svg'

import style from './posts.styl'

class Posts extends PureComponent {
  state = {
    postFormOpem: false,
    postId: null
  }

  openNewForm = () => {
    this.setState({ postId: null }, this.toggleForm)
  }

  openEditForm = postId => {
    this.setState({ postId }, this.toggleForm)
  }

  toggleForm = () => {
    this.setState(state => ({
      postFormOpem: !state.postFormOpem
    }))
  }

  refreshPosts = (category) => {
    const { searchPostsByCategory } = this.props

    searchPostsByCategory(category)
    this.nagivateToCategory(category)
  }

  nagivateToCategory = (category) => {
    const { history } = this.props

    history.replace(`/${category}`)
  }

  render () {
    const { match } = this.props
    const { category } = match.params
    const { postFormOpem, postId } = this.state

    return (
      <div className={style.container}>
        <div className={style.header}>
          <Button
            label='New post'
            icon={icnNewPost}
            primary
            onClick={this.openNewForm}
          />
        </div>
        <Categories categorySelected={category} />
        <PostList
          categorySelected={category}
          editPost={this.openEditForm}
        />
        {postFormOpem &&
          <PostForm
            postId={postId}
            onClickClose={this.toggleForm}
            handleRefresh={this.refreshPosts}
          />
        }
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ searchPostsByCategory }, dispatch)

export default connect(null, mapDispatchToProps)(withRouter(Posts))
