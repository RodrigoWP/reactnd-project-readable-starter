'use strict'

import {
  SEARCH_POST,
  SEARCH_COMMENTS,
  PUBLISH_NEW_COMMENT,
  PUBLISH_EDIT_COMMENT
 } from './actions'
import { apiGet, apiPost, apiPut } from 'utils/api'
import { v1 as uuid } from 'uuid'

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

export const publishNewComment = payload => (dispatch, getState) => {
  apiPost('/comments', { id: uuid(), ...payload })
    .then(response => response.data)
    .then(data => {
      const { postDetails } = getState()
      const { comments } = postDetails

      comments.push(data)

      dispatch({ type: PUBLISH_NEW_COMMENT, payload: comments })
    })
}
