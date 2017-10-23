import React from 'react'
import PropTypes from 'prop-types'
import { ScoreIcon } from 'components'

const VoteScore = ({ count = 0, active = false, onClick }) => (
  <ScoreIcon
    icon={require(`icons/clap${active ? '-active' : ''}.png`)}
    count={count}
    onClick={onClick}
  />
)

VoteScore.propTypes = {
  count: PropTypes.number,
  active: PropTypes.bool,
  onClick: PropTypes.func
}

export default VoteScore
