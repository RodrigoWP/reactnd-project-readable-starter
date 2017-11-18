'use strict'

import {
  SEARCH_POSTS,
  SEARCH_CATEGORIES,
  SEARCH_POSTS_CATEGORY
} from './actions'
import { apiGet } from 'utils/api'

export const searchPosts = () => dispatch => {
  apiGet('posts')
    .then((response) => response.data)
    .then((data) => {
      dispatch({ type: SEARCH_POSTS, payload: data })
    })
}

export const searchCategories = () => dispatch => {
  apiGet('categories')
    .then((response) => response.data)
    .then((data) => {
      dispatch({ type: SEARCH_CATEGORIES, payload: data.categories })
    })
}

export const searchPostsByCategory = category => dispatch => {
  apiGet(`${category}/posts`)
    .then((response) => response.data)
    .then((data) => {
      dispatch({ type: SEARCH_POSTS_CATEGORY, payload: data })
    })
}
