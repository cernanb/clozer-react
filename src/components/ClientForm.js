import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const ADD_CLIENT_MUTATION = gql`
  mutation ADD_CLIENT_MUTATION($firstName: String!, $lastName: String!, $email: String!, $address: String!) {
    addClient(firstName: $firstName, lastName: $lastName, email: $email, address: $address) {
      id
      firstName
      lastName
      email
      address
    }
  }
`

export default class ClientForm extends Component {
  state = { firstName: '', lastName: '', email: '', address: '' }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <Mutation mutation={ADD_CLIENT_MUTATION} variables={this.state}>
        {(addClient, result) => {
          return (
            <form
              onSubmit={e => {
                e.preventDefault()
                addClient().then(() => {
                  this.props.history.push('/clients')
                })
              }}
            >
              <div className="field">
                <label className="label is-left">First Name</label>
                <div className="control">
                  <input
                    onChange={this.onChange}
                    value={this.state.firstName}
                    name="firstName"
                    className="input"
                    type="text"
                  />
                </div>
                <label className="label is-left">Last Name</label>
                <div className="control">
                  <input
                    onChange={this.onChange}
                    value={this.state.lastName}
                    name="lastName"
                    className="input"
                    type="text"
                  />
                </div>
                <label className="label is-left">Email</label>
                <div className="control">
                  <input onChange={this.onChange} value={this.state.email} name="email" className="input" type="text" />
                </div>
                <label className="label is-left">Address</label>
                <div className="control">
                  <input
                    onChange={this.onChange}
                    value={this.state.address}
                    name="address"
                    className="input"
                    type="text"
                  />
                </div>
                <br />
                <input value="Create Client" className="button is-medium" type="submit" />
              </div>
            </form>
          )
        }}
      </Mutation>
    )
  }
}
