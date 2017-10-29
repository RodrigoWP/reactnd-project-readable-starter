import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '.'

const stories = storiesOf('button', module)

stories.add('default', () => (
  <Button label='Default' />
))

stories.add('primary', () => (
  <Button label='Primary' primary />
))
