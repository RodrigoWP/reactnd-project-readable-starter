import React from 'react'
import PropTypes from 'prop-types'

import style from './counter-icon.styl'

const CounterIcon = ({ icon, count }) => (
  count > 0 ? (
    <div className={style.container}>
      <label>{count}</label>
      <img src={icon} />
    </div>
  ) : false
)

CounterIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired
}

export { CounterIcon }
