import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Redirect } from '@reach/router'
import ClientCard from './ClientCard'

class Clients extends Component {
  renderClients = () => {
    return this.props.data.clients.map(client => <ClientCard client={client} />)
  }
  render() {
    if (this.props.data.loading) {
      return null
    }
    if (!this.props.data.currentUser) {
      console.log('no user')
      return <Redirect to="/login" />
    }
    return (
      <div>
        <h1>Clients</h1>
        <div className="tile is-ancestor">{this.renderClients()}</div>
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
    }
  }
`

export default graphql(clientsQuery)(Clients)
