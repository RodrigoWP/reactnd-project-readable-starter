'use strict'

import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from 'layout'

import Posts from './containers/posts'

import 'css/main.styl'

const { Header, Content } = Layout

class App extends PureComponent {
  render () {
    return (
      <Layout>
        <Header />
        <Router>
          <Content>
            <Route exact path='/' component={Posts} />
          </Content>
        </Router>
      </Layout>
    )
  }
}

export default App
