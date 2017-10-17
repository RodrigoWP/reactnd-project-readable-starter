'use strict'

import {
  SEARCH_POSTS,
  SEARCH_POSTS_SUCCESS
} from './actions'
import { apiGet } from 'utils/api'

export const searchPosts = () => dispatch => {
  dispatch({ type: SEARCH_POSTS })

  apiGet('posts')
    .then((response) => response.data)
    .then((data) => dispatch({ type: SEARCH_POSTS_SUCCESS, payload: data }))
}
