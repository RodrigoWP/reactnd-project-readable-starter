import React from 'react'
import { shallow } from 'enzyme'
import { CounterIcon } from './index'

it('Should render correctly with out props', () => {
  const component = <CounterIcon />
  expect(shallow(component)).toMatchSnapshot()
})

it('Should render correctly with count', () => {
  const component = <CounterIcon count={1} />
  expect(shallow(component)).toMatchSnapshot()
})
