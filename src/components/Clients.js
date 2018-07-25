import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class Clients extends Component {
  render() {
    return <h1>Clients</h1>
  }
}

const clientsQuery = gql`
  {
    clients {
      firstName
      lastName
    }
  }
`

export default graphql(clientsQuery)(Clients)
