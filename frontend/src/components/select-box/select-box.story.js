'use strict'

import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { SelectBox } from '.'

const stories = storiesOf('select-box', module)

stories.add('default controlled', () => {
  class SelectBoxStory extends PureComponent {
    state = {
      value: ''
    }

    onChange = (value) => {
      this.setState({ value })
    }

    render () {
      const { value } = this.state

      return (
        <SelectBox
          label='label'
          onChange={this.onChange}
          options={[
            { value: 'option1', label: 'opção 1' },
            { value: 'option2', label: 'opção 2' },
            { value: 'option3', label: 'opção 3' }
          ]}
          value={value}
          placeholder='Select a value'
        />
      )
    }
  }

  return <SelectBoxStory />
})
