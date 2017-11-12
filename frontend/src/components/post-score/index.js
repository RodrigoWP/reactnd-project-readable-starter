'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import { VoteScore, CommentScore } from 'components'

import style from './post-score.styl'

const PostScore = ({ commentScore, voteScore, onClickVoteUp, onClickVoteDown }) => (
  <div className={style.container}>
    <CommentScore count={commentScore} />
    <VoteScore
      count={voteScore}
      onClickUp={onClickVoteUp}
      onClickDown={onClickVoteDown}
    />
  </div>
)

PostScore.propTypes = {
  commentScore: PropTypes.number,
  onClickVoteUp: PropTypes.func.isRequired,
  onClickVoteDown: PropTypes.func.isRequired
}

export { PostScore }
