import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
    const { postId } = this.props

    console.log('Edit: ', postId)

    this.toggleDropdown()
  }

  onRemove = () => {
    const { postId } = this.props

    console.log('Remove: ', postId)

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

PostMenu.propTypes = {
  postId: PropTypes.string.isRequired
}

export default PostMenu
