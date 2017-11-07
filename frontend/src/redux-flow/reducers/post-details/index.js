'use strict'

import {
  SEARCH_POST,
  SEARCH_COMMENTS
} from './actions'

const initialState = {
  post: {},
  comments: []
}

const postDetail = (state = initialState, action) => {
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
  }

  return state
}

export default postDetail
