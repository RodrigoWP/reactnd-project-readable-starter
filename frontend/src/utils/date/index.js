'use strict'

import moment from 'moment'

export const dateformat = (date, format) => {
  return moment(date).format(format)
}

export const formatDatetimePtBr = (date) => {
  return dateformat(date, 'DD/MM/YYYY HH:mm')
}
