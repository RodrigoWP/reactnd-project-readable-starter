import React from 'react'
import PropTypes from 'prop-types'
import css from 'strclass'
import Item from './dropdown-item'

import menuIcon from 'icons/action-menu.svg'
import style from './dropdown.styl'

const Dropdown = ({ onClick, children, open = false, className }) => (
  <div className={className}>
    <img className={style.action} src={menuIcon} onClick={onClick} />
    <div className={css({ [style.show]: open }, style.dropdown)}>
      {children}
    </div>
  </div>
)

Dropdown.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  open: PropTypes.bool,
  className: PropTypes.string
}

Dropdown.DropdownItem = Item

export { Dropdown }
