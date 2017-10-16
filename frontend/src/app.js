'use strict'

import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './containers/home'

import 'css/main.styl'
import style from 'css/app.styl'

class App extends PureComponent {
  render () {
    return (
      <div className={style.container}>
        <Router>
          <Switch>
            <Route path='/' component={Home} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
