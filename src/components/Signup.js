import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class Signup extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }

  submit = e => {
    e.preventDefault()
    const { email, password, firstName, lastName } = this.state
    this.props
      .mutate({ variables: { email, password, firstName, lastName } })
      .then(() => this.setState({ email: '', password, firstName, lastName }))
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  render() {
    return (
      <div>
        <h1> Signup</h1>
        <form onSubmit={this.submit}>
          <div className="field">
            <label className="label is-left">Email</label>
            <div className="control">
              <input onChange={this.onChange} name="email" className="input" type="text" />
            </div>
            <label className="label is-left">Password</label>
            <div className="control">
              <input onChange={this.onChange} name="password" className="input" type="text" />
            </div>
            <label className="label is-left">First Name</label>
            <div className="control">
              <input onChange={this.onChange} name="firstName" className="input" type="text" />
            </div>
            <label className="label is-left">Last Name</label>
            <div className="control">
              <input onChange={this.onChange} name="lastName" className="input" type="text" />
            </div>
            <input value="Signup" type="submit" />
          </div>
        </form>
      </div>
    )
  }
}

const mutation = gql`
  mutation Signup($email: String!, $password: String!, $firstName: String!, $lastName: String!) {
    signup(email: $email, password: $password, firstName: $firstName, lastName: $lastName) {
      email
    }
  }
`

export default graphql(mutation)(Signup)
