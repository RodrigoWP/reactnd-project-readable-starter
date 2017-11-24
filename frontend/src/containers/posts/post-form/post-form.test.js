'use strict'

import React from 'react'
import { shallow } from 'enzyme'
import PostForm from '.'

it('Should render correctly', () => {
  const component = (
    <PostForm
      onClickClose={() => jest.fn()}
      handleRefresh={() => jest.fn()}
    />
  )

  expect(shallow(component)).toMatchSnapshot()
})
