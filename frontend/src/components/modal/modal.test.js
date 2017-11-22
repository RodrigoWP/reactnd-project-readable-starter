'use strict'

import React from 'react'
import { shallow } from 'enzyme'
import { Modal } from '.'

it('Should render correctly', () => {
  const component = (
    <Modal />
  )

  expect(shallow(component)).toMatchSnapshot()
})
