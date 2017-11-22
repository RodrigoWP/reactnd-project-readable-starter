import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { voteUpPost, voteDownPost, deletePost } from 'redux-flow/reducers/posts/action-creators'
import { monthDayFormatter } from 'utils/helpers'
import { apiGet } from 'utils/api'
import { CrudMenu, PostScore } from 'widgets'
import CategoryTag from './category-tag'

import icnExpand from 'icons/icn-expand.svg'

import style from './post.styl'

class Post extends Component {
  state = {
    commentScore: 0
  }

  componentDidMount () {
    this.searchComments()
  }

  searchComments = async () => {
    const { data } = this.props
    const { id } = data
    const comments = await apiGet(`posts/${id}/comments`)

    this.setState({
      commentScore: comments.data.length
    })
  }

  navigateToPost = () => {
    const { history, data } = this.props
    const { id } = data

    history.push(`/${data.category}/${id}`)
  }

  render () {
    const { data, voteUpPost, voteDownPost, deletePost, editPost } = this.props
    const { commentScore } = this.state

    return (
      <div className={style.container}>
        <CategoryTag category={data.category} />
        <CrudMenu
          id={data.id}
          handleEdit={editPost}
          handleRemove={deletePost}
        />
        <div className={style.title}>
          <span>{data.title}</span>
        </div>
        <div className={style.body}>
          <span>{data.body}</span>
        </div>
        <div className={style.footer}>
          <div className={style.author}>
            <span>{data.author}</span>
            <span>{monthDayFormatter(data.timestamp)}</span>
          </div>
          <div className={style.score}>
            <PostScore
              commentScore={commentScore}
              voteScore={data.voteScore}
              onClickVoteUp={() => voteUpPost(data.id)}
              onClickVoteDown={() => voteDownPost(data.id)}
            />
          </div>
          <Button icon={icnExpand} width='40px' height='40px' onClick={this.navigateToPost} />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ voteUpPost, voteDownPost, deletePost }, dispatch)

Post.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    timestamp: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    body: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
    voteScore: PropTypes.number,
    deleted: PropTypes.bool
  }),
  editPost: PropTypes.func
}

export default connect(null, mapDispatchToProps)(withRouter(Post))
