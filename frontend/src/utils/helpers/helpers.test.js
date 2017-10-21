'use strict'

import { expect } from 'chai'

import { monthDayFormatter } from './index'

it('Should return the correct format', () => {
  const dateJan01 = 86400000
  const format = 'Jan 01'

  expect(monthDayFormatter(dateJan01)).to.be.equal(format)
})
