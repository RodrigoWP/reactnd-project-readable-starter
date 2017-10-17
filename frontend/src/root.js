import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import App from './app'

import reducers from 'redux-flow/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore)

const Root = () => (
  <Provider store={createStoreWithMiddleware(reducers, devTools)}>
    <App />
  </Provider>
)

export default Root
