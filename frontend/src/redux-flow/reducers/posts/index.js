'use strict'

import {
  SEARCH_POSTS,
  SEARCH_CATEGORIES,
  SEARCH_POSTS_CATEGORY,
  VOTE_UP_POST,
  VOTE_DOWN_POST,
  DELETE_POST
} from './actions'
import { updateObjectInArrayById, removeObjectInArrayById } from 'utils/array'

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
    case VOTE_UP_POST:
    case VOTE_DOWN_POST:
      return {
        ...state,
        postsData: updateObjectInArrayById(state.postsData, action.payload)
      }
    case DELETE_POST:
      return {
        ...state,
        postsData: removeObjectInArrayById(state.postsData, action.payload)
      }
  }

  return state
}

export default posts
