import React from 'react'
import PropTypes from 'prop-types'
import icnActionMenu from 'icons/action-menu.svg'
import DropdownItem from './dropdown-item'

import style from './dropdown-menu.styl'

const DropdownMenu = ({ children }) => (
  <div className={style.container}>
    <img src={icnActionMenu} />
    <div className={style.content}>
      {children}
    </div>
  </div>
)

DropdownMenu.DropdownItem = DropdownItem

DropdownMenu.propTypes = {
  children: PropTypes.node.isRequired
}

export { DropdownMenu }
