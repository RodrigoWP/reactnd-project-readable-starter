import React from 'react'
import PropTypes from 'prop-types'
import { ScoreIcon } from 'components'

import icnComment from 'icons/comment.png'

const CommentScore = ({ count = 0 }) => (
  <ScoreIcon
    icon={icnComment}
    count={count}
  />
)

CommentScore.propTypes = {
  count: PropTypes.number
}

export default CommentScore
