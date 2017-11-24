'use strict'

import React from 'react'
import { shallow } from 'enzyme'
import Content from '.'

it('Should render correctly', () => {
  const component = (
    <Content />
  )

  expect(shallow(component)).toMatchSnapshot()
})
