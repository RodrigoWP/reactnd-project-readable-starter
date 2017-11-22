'use strict'

import React from 'react'
import { shallow } from 'enzyme'
import { SelectBox } from '.'

it('Should render correctly', () => {
  const component = (
    <SelectBox />
  )

  expect(shallow(component)).toMatchSnapshot()
})
