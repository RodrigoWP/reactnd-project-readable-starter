'use strict'

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { CrudMenu } from '.'

const stories = storiesOf('crud-menu', module)

stories.add('basic', () => (
  <div style={{ position: 'relative', width: '200px', height: '200px', boxShadow: '0 1px 2px 2px rgba(59, 73, 94, 0.3)' }}>
    <CrudMenu
      id='50'
      handleEdit={action('handleEdit')}
      handleRemove={action('handleRemove')}
    />
  </div>
))
