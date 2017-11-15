'use strict'

import React from 'react'
import { storiesOf } from '@storybook/react'
import { Input } from '.'

const stories = storiesOf('input', module)

stories.add('default', () => (
  <Input label='label' />
))
