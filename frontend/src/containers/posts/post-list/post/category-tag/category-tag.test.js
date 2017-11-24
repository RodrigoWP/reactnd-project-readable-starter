'use strict'

import React from 'react'
import { shallow } from 'enzyme'
import CategoryTag from '.'

it('Should render correctly', () => {
  const component = (
    <CategoryTag category='0' />
  )

  expect(shallow(component)).toMatchSnapshot()
})
