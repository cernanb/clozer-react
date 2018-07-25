import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Clients from './components/Clients'
import { Router } from '@reach/router'

import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

import Signup from './components/Signup'

import './scss/app.scss'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">{this.props.children}</div>
      </div>
    )
  }
}

let app = document.getElementById('app')

const cache = new InMemoryCache()

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
})

const client = new ApolloClient({
  link: httpLink,
  cache,
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App path="/" name="Yomi">
        <Clients path="/clients" />
        <Signup path="/signup" />
      </App>
    </Router>
  </ApolloProvider>,
  app
)
