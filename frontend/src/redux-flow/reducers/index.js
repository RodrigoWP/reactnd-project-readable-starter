import { combineReducers } from 'redux'

import posts from './posts'
import postDetails from './post-details'

export default combineReducers({
  posts,
  postDetails
})
