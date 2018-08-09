import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class Signin extends Component {
  state = {
    email: '',
    password: '',
  }

  submit = e => {
    e.preventDefault()
    const { email, password } = this.state
    this.props.mutate({ variables: { email, password }, refetchQueries: [{ query }] }).then(() => {
      this.setState({ email: '', password })
      this.props.history.push('/clients')
    })
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  render() {
    return (
      <div>
        <h1>Signin</h1>
        <form onSubmit={this.submit}>
          <div className="field">
            <label className="label is-left">Email</label>
            <div className="control">
              <input onChange={this.onChange} name="email" className="input" type="text" />
            </div>
            <label className="label is-left">Password</label>
            <div className="control">
              <input onChange={this.onChange} name="password" className="input" type="password" />
            </div>
            <input value="Sign in" type="submit" />
          </div>
        </form>
      </div>
    )
  }
}

const mutation = gql`
  mutation Signin($email: String!, $password: String!) {
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

export default graphql(mutation)(graphql(query, mutation)(Signin))
