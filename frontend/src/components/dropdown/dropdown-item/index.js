import React from 'react'
import PropTypes from 'prop-types'

import style from './dropdown-item.styl'

const DropdownItem = ({ onClick, label, icon }) => (
  <li className={style.container} onClick={onClick}>
    {icon && <img src={icon} />}
    <span>{label}</span>
  </li>
)

DropdownItem.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default DropdownItem
