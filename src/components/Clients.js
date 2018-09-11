import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import ClientCard from './ClientCard'
import ReactLoading from 'react-loading'

class Clients extends Component {
  renderClients = clients => {
    return clients.map(client => <ClientCard history={this.props.history} key={client.id} client={client} />)
  }
  render() {
    return (
      <Query query={clientsQuery}>
        {({ loading, data }) => {
          return loading ? (
            <ReactLoading
              className="is-horizontal-center"
              type={'spinningBubbles'}
              color={'#87adec'}
              height={'20%'}
              width={'20%'}
            />
          ) : (
            <div>
              <h1>Clients</h1>
              <div className="columns is-multiline">{this.renderClients(data.clients)}</div>
            </div>
          )
        }}
      </Query>
    )
  }
}

const clientsQuery = gql`
  query clientsQuery {
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

export default Clients
