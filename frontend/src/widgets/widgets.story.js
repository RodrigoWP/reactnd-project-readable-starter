'use strict'

import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from 'components'
import { action } from '@storybook/addon-actions'
import { CrudMenu } from './crud-menu'
import { PostScore } from './post-score'

const stories = storiesOf('widgets', module)

stories.add('crud-menu', () => (
  <div style={{ position: 'relative', width: '200px', height: '200px', boxShadow: '0 1px 2px 2px rgba(59, 73, 94, 0.3)' }}>
    <CrudMenu
      id='50'
      handleEdit={action('handleEdit')}
      handleRemove={action('handleRemove')}
    />
  </div>
))

stories.add('post-score', () => {
  class PostScoreStory extends PureComponent {
    state = {
      voteScore: 0
    }

    onClickUpVote = () => {
      this.setState(state => ({
        voteScore: state.voteScore + 1
      }))
    }

    onClickDownVote = () => {
      this.setState(state => ({
        voteScore: state.voteScore - 1
      }))
    }

    render () {
      const { voteScore } = this.state

      return (
        <PostScore
          commentScore={10}
          voteScore={voteScore}
          onClickVoteUp={this.onClickUpVote}
          onClickVoteDown={this.onClickDownVote}
        />
      )
    }
  }

  return <PostScoreStory />
})
