import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import gql from 'graphql-tag'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import App from './components/App'

import './scss/app.scss'

let app = document.getElementById('app')

const defaultState = {
  loggedIn: false
}

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include',
  clientState: {
    defaults: defaultState,
    resolvers: {}
  }
})

const CURRENT_USER_QUERY = gql`
  query currentUser {
    currentUser {
      id
    }
  }
`
client
  .query({
    query: CURRENT_USER_QUERY
  })
  .then(res => {
    if (res.data.currentUser) {
      client.writeData({ data: { loggedIn: true } })
    }
  })

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  app
)
