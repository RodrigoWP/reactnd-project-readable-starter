'use strict'

import {
  SEARCH_POSTS,
  SEARCH_POSTS_SUCCESS
} from './actions'

export const initiaState = {
  posts: [],
  isFetching: false
}

const posts = (state = initiaState, action) => {
  switch (action.type) {
    case SEARCH_POSTS:
      return {
        ...state,
        isFetching: true
      }
    case SEARCH_POSTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        posts: action.payload
      }
  }

  return state
}

export default posts
