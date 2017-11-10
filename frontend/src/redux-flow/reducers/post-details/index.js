'use strict'

import {
  SEARCH_POST,
  SEARCH_COMMENTS,
  PUBLISH_NEW_COMMENT
} from './actions'

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
  }

  return state
}

export default postDetails
