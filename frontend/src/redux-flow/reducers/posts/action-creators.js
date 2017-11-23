'use strict'

import {
  SEARCH_POSTS,
  SEARCH_CATEGORIES,
  SEARCH_POSTS_CATEGORY,
  VOTE_UP_POST,
  VOTE_DOWN_POST,
  DELETE_POST
} from './actions'
import { apiGet, apiPost, apiDelete } from 'utils/api'
import { Notify } from 'components'

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

export const voteUpPost = id => dispatch => {
  apiPost(`posts/${id}`, {
    option: 'upVote'
  }).then(({ data }) => dispatch({ type: VOTE_UP_POST, payload: data }))
}

export const voteDownPost = id => dispatch => {
  apiPost(`posts/${id}`, {
    option: 'downVote'
  }).then(({ data }) => dispatch({ type: VOTE_DOWN_POST, payload: data }))
}

export const deletePost = id => dispatch => {
  apiDelete(`posts/${id}`)
    .then(() => dispatch({ type: DELETE_POST, payload: id }))
    .then(() => Notify.success('Post removed with success'))
}
