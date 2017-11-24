'use strict'

import React from 'react'
import { shallow } from 'enzyme'
import { PostScore } from '.'

it('Should render correctly', () => {
  const func = jest.fn()

  const component = (
    <PostScore
      onClickVoteUp={func}
      onClickVoteDown={func}
    />
  )

  expect(shallow(component)).toMatchSnapshot()
})
