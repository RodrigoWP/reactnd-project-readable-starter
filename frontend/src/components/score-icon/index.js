import React from 'react'
import PropTypes from 'prop-types'

import style from './score-icon.styl'

const ScoreIcon = ({ icon, count, onClick }) => (
  <div className={style.container}>
    <img onClick={onClick} src={icon} />
    <span>{count}</span>
  </div>
)

ScoreIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func
}

export { ScoreIcon }
