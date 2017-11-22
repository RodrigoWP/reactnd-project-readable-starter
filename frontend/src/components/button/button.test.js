'use strict'

import React from 'react'
import { shallow, mount } from 'enzyme'
import { Button } from '.'

it('Should render correctly', () => {
  const component = (
    <Button label='default' />
  )

  expect(shallow(component)).toMatchSnapshot()
})

it('Should call onClick when button is clicked', () => {
  const onClick = jest.fn()

  const component = mount(
    <Button
      label='default'
      onClick={onClick}
    />
  )

  component.find('button').simulate('click')

  expect(onClick).toHaveBeenCalledTimes(1)
})

it('When prop icon is not null should render img element', () => {
  const component = mount(
    <Button icon='icon' />
  )

  const imgElement = component.find('img')

  expect(imgElement.length).toBe(1)
})
