'use strict'

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchCategories, searchPostsByCategory, searchPosts } from 'redux-flow/reducers/posts/action-creators'
import { CategoryBadge } from 'components'

import style from './categories.styl'

const ALL_CATEGORIES = 'all'

class Categories extends PureComponent {
  componentDidMount () {
    const { searchCategories } = this.props

    searchCategories()
  }

  selectCategory = (category) => {
    const { history, searchPostsByCategory, searchPosts } = this.props

    if (category === ALL_CATEGORIES) {
      searchPosts()
      history.replace(`/`)
    } else {
      history.replace(`/${category}`)
      searchPostsByCategory(category)
    }
  }

  render () {
    const { categories, categorySelected } = this.props

    return (
      <div className={style.container}>
        <div className={style.categoryCol}>
          <CategoryBadge
            category={ALL_CATEGORIES}
            onClick={this.selectCategory}
            hightlight={!categorySelected}
          />
        </div>
        {categories.map((category, index) => (
          <div key={index} className={style.categoryCol}>
            <CategoryBadge
              category={category.name}
              hightlight={category.name === categorySelected}
              onClick={this.selectCategory}
            />
          </div>
        ))}
      </div>
    )
  }
}

Categories.propTypes = {
  categorySelected: PropTypes.string
}

const mapStateToProps = ({ posts }) => ({
  categories: posts.categories
})

const mapDispatchToProps = dispatch => bindActionCreators({ searchCategories, searchPostsByCategory, searchPosts }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Categories))
