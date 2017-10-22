import React from 'react'
import PropTypes from 'prop-types'
import { ScoreIcon } from 'components'

const VoteScore = ({ count = 0, active = false }) => (
  <ScoreIcon
    icon={require(`icons/clap${active ? '-active' : ''}.png`)}
    count={count}
  />
)

VoteScore.propTypes = {
  count: PropTypes.number,
  active: PropTypes.bool
}

export default VoteScore
