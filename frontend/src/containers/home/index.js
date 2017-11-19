'use strict'

import React from 'react'
import Categories from './categories'
import Posts from './posts'

import style from './home.styl'

const Home = ({ match }) => {
  const { category } = match.params

  return (
    <div className={style.container}>
      <Categories key='categories' categorySelected={category} />
      <Posts key='posts' categorySelected={category} />
    </div>
  )
}

export default Home
