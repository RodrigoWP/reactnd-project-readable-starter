import React from 'react'
import PropTypes from 'prop-types'
import css from 'strclass'

import style from './button.styl'

const Button = ({
  label,
  icon,
  onClick,
  primary = false,
  width = '130px',
  height = '40px',
  iconSize = '24px'
}) => (
  <button
    className={css({[style.primary]: primary}, style.container)}
    style={{ width: width, height: height }}
    onClick={onClick}
  >
    {icon && <img src={icon} style={{ width: iconSize, height: iconSize }} />}
    {label && <span>{label}</span>}
  </button>
)

Button.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  width: PropTypes.string,
  height: PropTypes.string,
  iconSize: PropTypes.string
}

export { Button }
