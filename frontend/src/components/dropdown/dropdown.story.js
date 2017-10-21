import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { Dropdown } from './index'

import editIcon from 'icons/edit.svg'

const { DropdownItem } = Dropdown

const stories = storiesOf('dropdown', module)

stories.add('Basic', () => {
  class DropdownUsage extends Component {
    state = {
      open: false
    }

    toggleDropdown = () => {
      this.setState({
        open: !this.state.open
      })
    }

    onClickItem = () => {
      console.log("onClickItem")

      this.toggleDropdown()
    }

    render(){
      return (
        <Dropdown key="dropdown" open={this.state.open} onClick={this.toggleDropdown}>
          <DropdownItem onClick={this.onClickItem} icon={editIcon} label="Editar" />
        </Dropdown>
      )
    }
  }

  return <DropdownUsage />
})
