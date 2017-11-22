'use strict'

import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '.'

import upArrowIcon from 'icons/up-arrow.svg'

const stories = storiesOf('button', module)

stories.add('default', () => (
  <Button label='Default' />
))

stories.add('primary', () => (
  <Button label='Primary' primary />
))

stories.add('with icon', () => (
  <Button label='Primary' icon={upArrowIcon} />
))

stories.add('only icon', () => (
  <Button
    icon={upArrowIcon}
  />
))

stories.add('only icon with custom size', () => (
  <Button
    icon={upArrowIcon}
    width='30px'
    height='30px'
    iconSize='14px'
  />
))
