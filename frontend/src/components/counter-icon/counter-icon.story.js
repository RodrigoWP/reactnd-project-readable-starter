import React from 'react'
import { storiesOf } from '@storybook/react'
import { CounterIcon } from './index'
import icnComment from 'icons/comment.png'
import icnStar from 'icons/star.png'

const stories = storiesOf('counter-icon', module)

stories.add('Basic', () => (
  <div>
    <CounterIcon
      icon={icnComment}
      count={15}
    />

    <CounterIcon
      icon={icnStar}
      count={5}
    />
  </div>
))
