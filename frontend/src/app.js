'use strict'

import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from 'layout'

import Home from './containers/home'
import PostDetails from './containers/post-details'

import 'css/main.styl'

const { Header, Content } = Layout

class App extends PureComponent {
  render () {
    return (
      <Layout>
        <Header />
        <Router>
          <Content>
            <Switch>
              <Route exact path='/:category?' component={Home} />
              <Route exact path='/:category/:postId' component={PostDetails} />
            </Switch>
          </Content>
        </Router>
      </Layout>
    )
  }
}

export default App
