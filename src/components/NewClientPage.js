import React, { Component } from 'react'
import ClientForm from './ClientForm'

export default class NewClientPage extends Component {
  render() {
    return (
      <div>
        <h1>Create New Client</h1>
        <ClientForm history={this.props.history} />
      </div>
    )
  }
}
