import React, { Component } from 'react'
import Header from './Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Clients from './Clients'
import ClientShow from './ClientShow'
import Signup from './Signup'
import SigninPage from './SigninPage'
import Home from './Home'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/clients/:id" component={ClientShow} />
              <Route exact path="/clients" component={Clients} />
              <Route path="/signin" component={SigninPage} />
              <Route path="/signup" component={Signup} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
