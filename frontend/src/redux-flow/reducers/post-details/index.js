'use strict'

import {
  SEARCH_POST,
  SEARCH_COMMENTS,
  PUBLISH_NEW_COMMENT,
  PUBLISH_EDIT_COMMENT,
  DELETE_COMMENT,
  VOTE_UP_COMMENT,
  VOTE_DOWN_COMMENT,
  VOTE_UP_POST,
  VOTE_DOWN_POST
} from './actions'
import { updateObjectInArrayById, removeObjectInArrayById } from 'utils/array'

const initialState = {
  post: {},
  comments: []
}

const postDetails = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_POST:
      return {
        ...state,
        post: action.payload
      }
    case SEARCH_COMMENTS:
      return {
        ...state,
        comments: action.payload
      }
    case PUBLISH_NEW_COMMENT:
      return {
        ...state,
        comments: [
          ...state.comments,
          action.payload
        ]
      }
    case PUBLISH_EDIT_COMMENT:
    case VOTE_UP_COMMENT:
    case VOTE_DOWN_COMMENT:
      return {
        ...state,
        comments: updateObjectInArrayById(state.comments, action.payload)
      }
    case DELETE_COMMENT:
      return {
        ...state,
        comments: removeObjectInArrayById(state.comments, action.payload)
      }
  }

  return state
}

export default postDetails
