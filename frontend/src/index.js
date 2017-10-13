'use strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from './root'

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <NextApp />
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  )
}

renderApp(Root)

if (module.hot) {
  module.hot.accept('./root', () => {
    const NextApp = require('./root').default
    renderApp(NextApp)
  })
}
