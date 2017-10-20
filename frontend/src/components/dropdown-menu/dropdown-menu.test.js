import React from 'react'
import { shallow } from 'enzyme'
import { DropdownMenu } from './index'

const { DropdownItem } = DropdownMenu

it(' Dropdown menu should render correctly', () => {
  const component = shallow(<DropdownMenu />)
  expect(component).toMatchSnapshot()
})

it('Dropdown item should render correctly', () => {
  const component = shallow(<DropdownItem />)
  expect(component).toMatchSnapshot()
})
