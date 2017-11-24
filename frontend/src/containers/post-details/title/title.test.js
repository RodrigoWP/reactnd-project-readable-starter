'use strict'

import React from 'react'
import { shallow } from 'enzyme'
import Title from '.'

it('Should render correctly', () => {
  const component = (
    <Title />
  )

  expect(shallow(component)).toMatchSnapshot()
})
