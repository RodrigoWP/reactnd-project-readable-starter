import React from 'react'
import { shallow } from 'enzyme'
import { ScoreIcon } from './index'

it('Should render correctly with out props', () => {
  const component = (
    <ScoreIcon count={0} />)

  expect(shallow(component)).toMatchSnapshot()
})

it('Should render correctly with count', () => {
  const component = (
    <ScoreIcon count={1} />)

  expect(shallow(component)).toMatchSnapshot()
})
