import React from 'react'
import ParcelLogo from '../img/logo.svg'
import { Link } from '@reach/router'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const Header = props => {
  return (
    <header>
      <nav className="navbar is-light" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img width="60" src={ParcelLogo} alt="" />
          </Link>
        </div>
        <div className="navbar-end">
          <Link className="navbar-item" to="/signup">
            Signup
          </Link>
          <Link className="navbar-item" to="/signin">
            Sign In
          </Link>
          <Link className="navbar-item" to="/clients">
            Clients
          </Link>
        </div>
      </nav>
    </header>
  )
}

const query = gql`
  {
    currentUser {
      id
      email
      firstName
    }
  }
`

export default graphql(query)(Header)
