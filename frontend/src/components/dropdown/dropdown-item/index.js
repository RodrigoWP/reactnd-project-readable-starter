import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import style from './dropdown-item.styl'

class DropdownItem extends PureComponent {
  onClick = () => {
    const { onClick, onCloseContainer } = this.props

    onCloseContainer()
    onClick()
  }

  render () {
    const { label, icon } = this.props

    return (
      <li className={style.container} onClick={this.onClick}>
        {icon && <img src={icon} />}
        <span>{label}</span>
      </li>
    )
  }
}

DropdownItem.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClickItem: PropTypes.func
}

export default DropdownItem
