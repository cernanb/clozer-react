import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import ClientCard from './ClientCard'

class Clients extends Component {
   renderClients = clients => {
      return clients.map(client => <ClientCard history={this.props.history} key={client.id} client={client} />)
   }
   render() {
      return (
         <Query query={clientsQuery}>
            {({ loading, data }) => {
               return loading ? (
                  <h1>Loading</h1>
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

export default Clients
