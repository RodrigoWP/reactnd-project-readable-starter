'use strict'

import React, { PureComponent } from 'react'
import { Button } from 'components'
import Categories from './categories'
import Posts from './posts'
import PostForm from './post-form'

import style from './home.styl'

class Home extends PureComponent {
  state = {
    postFormOpem: false
  }

  toggleForm = () => {
    this.setState(state => ({
      postFormOpem: !state.postFormOpem
    }))
  }

  render () {
    const { match } = this.props
    const { category } = match.params
    const { postFormOpem } = this.state

    return (
      <div className={style.container}>
        <Categories key='categories' categorySelected={category} />
        <Posts key='posts' categorySelected={category} />
        <PostForm
          editMode={false}
          formIsOpen={postFormOpem}
          onClickClose={this.toggleForm}
          categorySelected={category}
        />
        <div>
          <Button
            label='New post'
            primary
            onClick={this.toggleForm}
          />
        </div>
      </div>
    )
  }
}

export default Home
