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
