import React from 'react'
import PropTypes from 'prop-types'

import style from './post.styl'

const mock = {
  "id": "8xf0y6ziyjabvozdd253nd",
  "timestamp": 1467166872634,
  "title": "Udacity is the best place to learn React",
  "body": "Everyone says so after all.",
  "author": "thingtwo",
  "category": "react",
  "voteScore": 6,
  "deleted": false
}

const Post = ({ data = mock }) => (
  <div>

  </div>
)

Post.propTypes = {
  id: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  voteScore: PropTypes.number.isRequired,
  deleted: PropTypes.bool.isRequired
}
