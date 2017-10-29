import React from 'react'
import PropTypes from 'prop-types'
import css from 'strclass'

import style from './button.styl'

const Button = ({ label, onClick, primary = false }) => (
  <button
    className={css({[style.primary]: primary}, style.container)}
    onClick={onClick}
  >
    {label}
  </button>
)

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export { Button }
