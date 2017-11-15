import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from 'components'

import editIcon from 'icons/edit.svg'
import removeIcon from 'icons/remove.svg'

import style from './crud-menu.styl'

const { DropdownItem } = Dropdown

class CrudMenu extends Component {
  state = {
    open: false
  }

  toggleDropdown = () => {
    this.setState({
      open: !this.state.open
    })
  }

  onEdit = () => {
    const { id, handleEdit } = this.props

    handleEdit(id)
    this.toggleDropdown()
  }

  onRemove = () => {
    const { id, handleRemove } = this.props

    handleRemove(id)
    this.toggleDropdown()
  }

  render () {
    const { open } = this.state

    return (
      <Dropdown open={open} onClick={this.toggleDropdown} className={style.container}>
        <DropdownItem onClick={this.onEdit} icon={editIcon} label='Editar' />
        <DropdownItem onClick={this.onRemove} icon={removeIcon} label='Excluir' />
      </Dropdown>
    )
  }
}

CrudMenu.propTypes = {
  id: PropTypes.string.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired
}

export { CrudMenu }
