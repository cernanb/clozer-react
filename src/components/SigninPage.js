import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Mutation } from 'react-apollo'
import SigninForm from './SigninForm'

class SigninPage extends Component {
  submit = params => {
    const { email, password } = params
    this.props.mutate({ variables: { email, password }, refetchQueries: [{ query }] }).then(() => {
      this.setState({ email: '', password })
    })
  }

  render() {
    return (
      <div>
        <h1>Signin</h1>
        <SigninForm history={this.props.history} submit={this.submit} />
      </div>
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
