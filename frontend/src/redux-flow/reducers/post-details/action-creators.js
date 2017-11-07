'use strict'

import {
  SEARCH_POST,
  SEARCH_COMMENTS
 } from './actions'
import { apiGet } from 'utils/api'

export const searchPost = postId => dispatch => {
  apiGet(`posts/${postId}`)
    .then(response => response.data)
    .then(data => dispatch({ type: SEARCH_POST, payload: data }))
}

export const searchComments = postId => dispatch => {
  apiGet(`/posts/${postId}/comments`)
    .then(response => response.data)
    .then(data => dispatch({ type: SEARCH_COMMENTS, payload: data }))
}
