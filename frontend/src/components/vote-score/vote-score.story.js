'use strict'

import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { VoteScore } from '.'

const stories = storiesOf('vote-score', module)

stories.add('basic usage', () => (
  <VoteScore />
))

stories.add('with random count', () => (
  <VoteScore count={4} />
))

stories.add('toggle active', () => {
  class Story extends Component {
    state = {
      active: false,
      count: 0
    }

    activeToggle = () => {
      this.setState(state => ({
        active: !state.active,
        count: state.active ? state.count - 1 : state.count + 1
      }))
    }

    render () {
      return (
        <VoteScore count={this.state.count} active={this.state.active} onClick={this.activeToggle} />
      )
    }
  }

  return <Story />
})
