'use strict'

import {
  SEARCH_POSTS
} from './actions'
import { apiGet } from 'utils/api'

export const searchPosts = () => dispatch => {
  apiGet('posts')
    .then((response) => response.data)
    .then((data) => {
      dispatch({ type: SEARCH_POSTS, payload: data })
    })
}
