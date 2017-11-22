'use strict'

import React from 'react'
import { shallow } from 'enzyme'
import { Input } from '.'

it('Should render correctly', () => {
  const component = (
    <Input />
  )

  expect(shallow(component)).toMatchSnapshot()
})
