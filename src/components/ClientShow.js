import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import ReactLoading from 'react-loading'

export default class ClientShow extends Component {
  render() {
    return (
      <Query
        query={gql`{
          client(id: "${this.props.match.params.id}") {
            id
            firstName
            lastName
            opportunities {
              id
              product
            }
          }
        }
`}
      >
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
