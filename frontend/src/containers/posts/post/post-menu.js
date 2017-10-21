import React, { Component } from 'react'
import { Dropdown } from 'components'

import editIcon from 'icons/edit.svg'
import removeIcon from 'icons/remove.svg'

import style from './post-menu.styl'

const { DropdownItem } = Dropdown

class PostMenu extends Component {
  state = {
    open: false
  }

  toggleDropdown = () => {
    this.setState({
      open: !this.state.open
    })
  }

  onEdit = () => {
    console.log('onEdit')

    this.toggleDropdown()
  }

  onRemove = () => {
    console.log('onRemove')

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

export default PostMenu
