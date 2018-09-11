import React, { Component } from 'react'
import Toggle from '../utilities/Toggle'
import Modal from '..//elements/Modal'

class ClientCard extends Component {
  redirectToClient = () => {
    this.props.history.push(`/clients/${this.props.client.id}`)
  }
  render() {
    const { client } = this.props
    return (
      <Toggle>
        {({ on, toggle }) => (
          <div className="column is-one-third">
            <div className="card">
              <div onClick={toggle} className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <i className="fas fa-user fa-3x" />
                    </figure>
                  </div>
                  <div className="media-content" style={{ overflow: 'visible' }}>
                    <p className="title is-4">{`${client.firstName} ${client.lastName}`}</p>
                    <p className="subtitle is-6">{client.email}</p>
                  </div>
                </div>
              </div>
            </div>
            <Modal on={on} toggle={toggle}>
              <h1>{client.firstName}</h1>
              <button onClick={this.redirectToClient}>View Client</button>
            </Modal>
          </div>
        )}
      </Toggle>
    )
  }
}

export default ClientCard
