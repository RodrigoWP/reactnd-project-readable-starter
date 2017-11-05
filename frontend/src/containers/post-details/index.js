import React, { PureComponent } from 'react'
import { apiGet } from 'utils/api'
import Header from './header'
import Title from './title'
import Posting from './posting'
import Comments from './comments'

import style from './post-details.styl'

class PostDetails extends PureComponent {
  state = {
    postDetail: {}
  }

  componentDidMount () {
    this.searchPost()
  }

  searchPost = async () => {
    const { match } = this.props
    const { postId } = match.params

    const { data } = await apiGet(`posts/${postId}`)

    this.setState({
      postDetail: data
    })
  }

  render () {
    const { postDetail } = this.state
    const { match } = this.props
    const { postId } = match.params

    return (
      <div className={style.container}>
        <Header author={postDetail.author} date={postDetail.timestamp} />
        <Title title={postDetail.title} />
        <Posting posting={postDetail.body} />
        <Comments postId={postId} author={postDetail.author} />
      </div>
    )
  }
}

export default PostDetails
