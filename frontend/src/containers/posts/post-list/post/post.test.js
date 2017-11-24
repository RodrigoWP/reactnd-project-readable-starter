'use strict'

import React from 'react'
import { shallow } from 'enzyme'
import { Post } from '.'

it('Should render correctly', () => {
  const component = (
    <Post
      data={{
        id: '0',
        category: 'category'
      }}
      deletePost={jest.fn}
      editPost={jest.fn}
    />
  )

  expect(shallow(component)).toMatchSnapshot()
})
