'use strict'

import React from 'react'
import { shallow } from 'enzyme'
import { VoteScore } from '.'

it('Should render correctly', () => {
  const component = <VoteScore icon='' />

  expect(shallow(component)).toMatchSnapshot()
})
