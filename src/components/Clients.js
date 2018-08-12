import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import ClientCard from './ClientCard'

class Clients extends Component {
  renderClients = () => {
    return this.props.data.clients.map(client => <ClientCard key={client.id} client={client} />)
  }
  render() {
    if (this.props.data.loading) {
      return null
    }

    return (
      <div>
        <h1>Clients</h1>
        <div className="columns is-multiline">{this.renderClients()}</div>
      </div>
    )
  }
}

const clientsQuery = gql`
  {
    currentUser {
      id
      email
    }

    clients {
      id
      firstName
      lastName
      email
    }
  }
`

export default graphql(clientsQuery)(Clients)
