'use strict'

import React from 'react'
import { shallow } from 'enzyme'
import Header from '.'

it('Should render correctly', () => {
  const func = jest.fn()

  const component = (
    <Header
      postId='0'
      handleEditPost={func}
      handleRemovePost={func}
    />
  )

  expect(shallow(component)).toMatchSnapshot()
})
