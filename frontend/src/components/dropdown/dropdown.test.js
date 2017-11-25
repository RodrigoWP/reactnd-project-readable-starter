'use strict'

import React from 'react'
import { shallow, mount } from 'enzyme'
import { Dropdown } from './index'

const { DropdownItem } = Dropdown

it('Should render correctly', () => {
  const component = (
    <Dropdown children='' />
  )
  expect(shallow(component)).toMatchSnapshot()
})

it('Should render DropdownItem correctly', () => {
  const component = (
    <DropdownItem label='' />
  )
  expect(shallow(component)).toMatchSnapshot()
})

it('When prop icon is not null should render img element', () => {
  const component = mount(
    <DropdownItem label='' icon='icon' />
  )

  const imgElement = component.find('img')

  expect(imgElement.length).toBe(1)
})
