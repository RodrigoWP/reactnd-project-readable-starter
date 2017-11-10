'use strict'

import {
  SEARCH_POSTS
} from './actions'

export const initiaState = {
  postsData: []
}

const posts = (state = initiaState, action) => {
  switch (action.type) {
    case SEARCH_POSTS:
      return {
        ...state,
        postsData: action.payload
      }
  }

  return state
}

export default posts
