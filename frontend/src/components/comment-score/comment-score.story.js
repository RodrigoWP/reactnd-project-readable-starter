'use strict'

import React from 'react'
import { storiesOf } from '@storybook/react'
import { CommentScore } from '.'

const stories = storiesOf('comment-score', module)

stories.add('Basic usage', () => (
  <CommentScore />
))

stories.add('With random count', () => (
  <CommentScore count={65} />
))