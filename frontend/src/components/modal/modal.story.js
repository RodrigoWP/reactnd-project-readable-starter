'use strict'

import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { Modal } from '.'
import { Button } from '../button'
import { Input } from '../input'
import { Row, Col } from 'react-flexbox-grid'

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

          <Modal title="Modal default" open={open} onClickClose={this.toggleModal}>
            <Button label='Close modal' primary onClick={this.toggleModal} />
          </Modal>
        </div>
      )
    }
  }

  return <ModalStory />
})

stories.add('modal-form', () => {
  class ModalFormStory extends PureComponent {
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
          <Button label='Abrir formulário' primary onClick={this.toggleModal} />

          <Modal
            title="Modal form"
            open={open}
            onClickClose={this.toggleModal}>
            <Row>
              <Col xs>
                <Input label='field 1' />
              </Col>
              <Col xs>
                <Input label='field 2' />
              </Col>
            </Row>

            <div style={{
              display: 'flex',
              marginTop: '30px',
              justifyContent: 'flex-end'
            }}>
              <Button label='Salvar' primary onClick={this.toggleModal} />
            </div>
          </Modal>
        </div>
      )
    }
  }

  return <ModalFormStory />
})
