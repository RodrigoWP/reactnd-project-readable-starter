import React from 'react'
import { storiesOf } from '@storybook/react'
import { ScoreIcon } from './index'

import icnStar from 'icons/star.png'

const stories = storiesOf('score-icon', module)

stories.add('Basic', () => (
  <div style={{ display: 'flex' }}>
    <ScoreIcon
      icon={icnStar}
      count={5}
    />
  </div>
))
