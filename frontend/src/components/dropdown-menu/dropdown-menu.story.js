import React from 'react'
import { storiesOf } from '@storybook/react'
import { DropdownMenu } from './index'

const stories = storiesOf('dropdown-menu', module)

stories.add('Basic', () => (
  <DropdownMenu />
))
