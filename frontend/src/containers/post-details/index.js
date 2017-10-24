import React, { Component } from 'react'
import Header from './header'
import Title from './title'
import Posting from './posting'

import style from './post-details.styl'

class PostDetails extends Component {

  componentDidMount() {
    this.searchPost()    
  }

  searchPost = () => {
    // const { match } = this.props
    // const { postId } = match.params    
  }

  render () {
    return (
      <div className={style.container}>
        <Header />
        <Title />
        <Posting />
      </div>
    )
  }
}

export default PostDetails