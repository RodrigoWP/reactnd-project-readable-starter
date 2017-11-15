'use strict'

import React from 'react'
import { storiesOf } from '@storybook/react'
import { Textarea } from '.'

const stories = storiesOf('textarea', module)

stories.add('default', () => (
  <Textarea label='label' />
))
