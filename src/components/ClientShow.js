import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import ReactLoading from 'react-loading'

export default class ClientShow extends Component {
  render() {
    const { match } = this.props
    return (
      <Query query={CLIENT_QUERY} variables={{ id: match.params.id }}>
        {({ data, loading }) => {
          return loading ? (
            <ReactLoading
              className="is-horizontal-center"
              type={'spinningBubbles'}
              color={'#87adec'}
              height={'20%'}
              width={'20%'}
            />
          ) : (
            <h1>{data.client.firstName}</h1>
          )
        }}
      </Query>
    )
  }
}

const CLIENT_QUERY = gql`
  query clientQuery($id: ID!) {
    client(id: $id) {
      id
      firstName
      lastName
      opportunities {
        id
        product
      }
    }
  }
`
