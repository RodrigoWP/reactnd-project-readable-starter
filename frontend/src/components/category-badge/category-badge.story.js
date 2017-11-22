'use strict'

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { CategoryBadge } from '.'

const stories = storiesOf('category-badge', module)

stories.add('default', () => (
  <CategoryBadge category='default' onClick={action()} />
))

stories.add('hightlight', () => (
  <CategoryBadge category='default' onClick={action()} hightlight />
))
