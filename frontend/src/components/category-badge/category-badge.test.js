'use strict'

import React from 'react'
import { shallow, mount } from 'enzyme'
import { CategoryBadge } from '.'

it('Should render correctly', () => {
  const component = <CategoryBadge />

  expect(shallow(component)).toMatchSnapshot()
})

it('Should call onClick when span is clicked', () => {
  const onClick = jest.fn()

  const component = mount(
    <CategoryBadge onClick={onClick} />
  )

  component.find('span').simulate('click')

  expect(onClick).toHaveBeenCalledTimes(1)
})
