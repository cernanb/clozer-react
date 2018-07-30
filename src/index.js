import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Clients from './components/Clients'
import { Router, Redirect } from '@reach/router'

import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

import Signup from './components/Signup'
import Signin from './components/Signin'
import App from './components/App'

import './scss/app.scss'

let app = document.getElementById('app')

const cache = new InMemoryCache()

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include',
})

const client = new ApolloClient({
  link: httpLink,
  dataIdFormObject: o => o.id,
  cache,
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App path="/" name="Yomi">
        <Clients path="/clients" />
        <Signup path="/signup" />
        <Signin path="/signin" />
      </App>
    </Router>
  </ApolloProvider>,
  app
)
