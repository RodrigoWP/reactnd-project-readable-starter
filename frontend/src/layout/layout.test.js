'use strict'

import React from 'react'
import { shallow } from 'enzyme'
import Layout from '.'

it('Should render correctly', () => {
  const component = (
    <Layout />
  )

  expect(shallow(component)).toMatchSnapshot()
})
