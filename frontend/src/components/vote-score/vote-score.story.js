'use strict'

import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { VoteScore } from '.'

const stories = storiesOf('vote-score', module)

stories.add('basic usage', () => {
  class Story extends Component {
    state = {
      count: 0
    }

    up = () => {
      this.setState(state => ({
        count: state.count + 1
      }))
    }

    down = () => {
      this.setState(state => ({
        count: state.count - 1
      }))
    }

    render () {
      return (
        <VoteScore
          count={this.state.count}
          onClickUp={this.up}
          onClickDown={this.down}
        />
      )
    }
  }

  return <Story />
})
