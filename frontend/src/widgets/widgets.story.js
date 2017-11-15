'use strict'

import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from 'components'
import { action } from '@storybook/addon-actions'
import { PostForm } from './post-form'
import { CrudMenu } from './crud-menu'

const stories = storiesOf('widgets', module)

stories.add('crud-menu', () => (
  <div style={{ position: 'relative', width: '200px', height: '200px', boxShadow: '0 1px 2px 2px rgba(59, 73, 94, 0.3)' }}>
    <CrudMenu
      id='50'
      handleEdit={action('handleEdit')}
      handleRemove={action('handleRemove')}
    />
  </div>
))

stories.add('post-form', () => {
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

          <PostForm
            title='Novo post'
            formIsOpen={open}
            onClickClose={this.toggleModal}
          />
        </div>
      )
    }
  }

  return <ModalFormStory />
})
