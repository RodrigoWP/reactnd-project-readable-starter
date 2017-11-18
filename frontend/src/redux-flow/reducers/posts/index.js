'use strict'

import {
  SEARCH_POSTS,
  SEARCH_CATEGORIES,
  SEARCH_POSTS_CATEGORY
} from './actions'

export const initiaState = {
  postsData: [],
  categories: []
}

const posts = (state = initiaState, action) => {
  switch (action.type) {
    case SEARCH_POSTS_CATEGORY:
    case SEARCH_POSTS:
      return {
        ...state,
        postsData: action.payload
      }
    case SEARCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }
  }

  return state
}

export default posts
