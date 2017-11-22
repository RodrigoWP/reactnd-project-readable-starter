'use strict'

import React from 'react'
import { shallow } from 'enzyme'
import { Textarea } from '.'

it('Should render correctly', () => {
  const component = (
    <Textarea />
  )

  expect(shallow(component)).toMatchSnapshot()
})
