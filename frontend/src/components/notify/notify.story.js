'use strict'

import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from 'components'
import { Notify } from '.'

const stories = storiesOf('notify', module)

stories.add('success', () => (
  <Button label='Show notify' onClick={() => Notify.success('Notify success')} />
))
