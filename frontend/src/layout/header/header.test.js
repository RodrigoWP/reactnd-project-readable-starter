'use strict'

import React from 'react'
import { shallow } from 'enzyme'
import Header from '.'

it('Should render correctly', () => {
  const component = (
    <Header />
  )

  expect(shallow(component)).toMatchSnapshot()
})
