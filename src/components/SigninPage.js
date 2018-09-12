import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Mutation } from 'react-apollo'
import SigninForm from './SigninForm'
import { ApolloConsumer } from 'react-apollo'

class SigninPage extends Component {
  render() {
    return (
      <ApolloConsumer>
        {client => {
          return (
            <div>
              <h1>Signin</h1>
              <SigninForm history={this.props.history} client={client} />
            </div>
          )
        }}
      </ApolloConsumer>
    )
  }
}

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      email
    }
  }
`

const query = gql`
  {
    currentUser {
      id
      email
    }
  }
`

export default SigninPage
