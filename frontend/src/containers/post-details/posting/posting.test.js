'use strict'

import React from 'react'
import { shallow } from 'enzyme'
import Posting from '.'

it('Should render correctly', () => {
  const component = (
    <Posting />
  )

  expect(shallow(component)).toMatchSnapshot()
})
