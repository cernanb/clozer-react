import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

export default class SigninForm extends Component {
  state = {
    email: '',
    password: ''
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    const { email, password } = this.state
    return (
      <Mutation mutation={LOGIN} variables={{ email, password }}>
        {login => (
          <form
            onSubmit={e => {
              e.preventDefault()
              login()
                .then(() => {
                  this.setState({ email: '', password: '' })
                  this.props.client.writeData({ data: { loggedIn: true } })
                  this.props.history.push('/clients')
                })
                .catch(e => console.log(e))
            }}
          >
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
        )}
      </Mutation>
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
