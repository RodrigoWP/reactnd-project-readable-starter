'use strict'

import React, { PureComponent } from 'react'

import 'css/main.styl'

import style from 'css/app.styl'

class App extends PureComponent {
  render () {
    return (
      <div className={style.container}>
        <h1>Hi udacity project!</h1>
      </div>
    )
  }
}

export default App
