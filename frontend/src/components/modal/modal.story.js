'use strict'

import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { Modal } from '.'
import { Button } from '../button'

const stories = storiesOf('modal', module)

stories.add('default', () => {
  class ModalStory extends PureComponent {
    state = {
      open: false
    }

    toggleModal = () => {
      this.setState(state => ({
        open: !state.open
      }))
    }

    render () {
      const { open } = this.state

      return (
        <div>
          <Button label='Abrir modal' primary onClick={this.toggleModal} />

          <Modal title='Modal default' open={open} onClickClose={this.toggleModal}>
            <Button label='Close modal' primary onClick={this.toggleModal} />
          </Modal>
        </div>
      )
    }
  }

  return <ModalStory />
})
