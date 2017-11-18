'use strict'

import React, { PureComponent } from 'react'
import Categories from './categories'
import Posts from './posts'

import style from './home.styl'

class Home extends PureComponent {
  render () {
    const { match } = this.props
    const { category } = match.params

    return (
      <div className={style.container}>
        <Categories key='categories' categorySelected={category} />
        <Posts key='posts' categorySelected={category} />
      </div>
    )
  }
}

export default Home
