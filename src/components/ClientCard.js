import React from 'react'

const ClientCard = props => (
  <div className="column is-one-third">
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <i className="fas fa-user fa-3x" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{`${props.client.firstName} ${props.client.lastName}`}</p>
            <p className="subtitle is-6">{props.client.email}</p>
          </div>
        </div>

        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a href="#">#css</a> <a href="#">#responsive</a>
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  </div>
)

export default ClientCard
