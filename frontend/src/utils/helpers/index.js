'use strict'

import moment from 'moment'

const format = (date, format) => {
  return moment(date).format(format)
}

export const monthDayFormatter = (date) => {
  return format(new Date(date), 'MMM DD')
}
