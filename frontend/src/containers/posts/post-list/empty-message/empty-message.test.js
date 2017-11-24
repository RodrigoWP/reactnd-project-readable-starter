'use strict'

import React from 'react'
import { shallow } from 'enzyme'
import EmptyMessage from '.'

it('Should render correctly', () => {
  const component = (
    <EmptyMessage />
  )

  expect(shallow(component)).toMatchSnapshot()
})
