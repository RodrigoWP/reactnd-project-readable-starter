import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from './dropdown-item'
import ClickOutside from './click-outside'

import menuIcon from 'icons/action-menu.svg'
import style from './dropdown.styl'

class Dropdown extends Component {
  state = {
    open: false
  }

  toggle = () => {
    this.setState(state => ({
      open: !state.open
    }))
  }

  hide = () => {
    this.setState({
      open: false
    })
  }

  render () {
    const { open } = this.state
    const { children, className } = this.props

    return (
      <div className={className}>
        <img className={style.action} src={menuIcon} onClick={this.toggle} />
        <ClickOutside onClickOutside={this.hide}>
          {open &&
            <div className={style.dropdown}>
              {React.Children.map(children, child => React.cloneElement(child, { onCloseContainer: this.hide }))}
            </div>
          }
        </ClickOutside>
      </div>
    )
  }
}

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

Dropdown.DropdownItem = Item

export { Dropdown }
