'use strict'

import {
  SEARCH_POST,
  SEARCH_COMMENTS,
  PUBLISH_NEW_COMMENT,
  PUBLISH_EDIT_COMMENT,
  DELETE_COMMENT,
  VOTE_UP_COMMENT,
  VOTE_DOWN_COMMENT
 } from './actions'
import { apiGet, apiPost, apiPut, apiDelete } from 'utils/api'
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

export const publishNewComment = payload => dispatch => {
  apiPost('/comments', { id: uuid(), ...payload })
    .then(response => response.data)
    .then(data => dispatch({ type: PUBLISH_NEW_COMMENT, payload: data }))
}

export const publishEditComment = (id, payload) => dispatch => {
  apiPut(`/comments/${id}`, payload)
    .then(response => response.data)
    .then(data => dispatch({ type: PUBLISH_EDIT_COMMENT, payload: data }))
}

export const deleteComment = id => dispatch => {
  apiDelete(`comments/${id}`)
    .then(() => dispatch({ type: DELETE_COMMENT, payload: id }))
}

export const voteUpComment = id => dispatch => {
  apiPost(`comments/${id}`, {
    option: 'upVote'
  })
    .then(response => response.data)
    .then(data => dispatch({ type: VOTE_UP_COMMENT, payload: data }))
}

export const voteDownComment = id => dispatch => {
  apiPost(`comments/${id}`, {
    option: 'downVote'
  })
    .then(response => response.data)
    .then(data => dispatch({ type: VOTE_DOWN_COMMENT, payload: data }))
}
