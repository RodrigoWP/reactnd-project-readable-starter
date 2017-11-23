'use strict'

import alertify from 'alertify.js'

const Notify = {
  success (message) {
    alertify.success(message)
  }
}

export { Notify }
