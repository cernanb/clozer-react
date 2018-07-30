import React, { Fragment, Component } from 'react'
import ParcelLogo from '../img/logo.svg'
import { Link } from '@reach/router'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class Header extends Component {
  logout = e => {
    e.preventDefault()
    this.props.mutate({
      refetchQueries: [{ query }],
    })
  }
  render() {
    const { data } = this.props
    return (
      <header>
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <img width="60" src={ParcelLogo} alt="" />
            </Link>
          </div>
          <div className="navbar-end">
            {data.currentUser ? (
              <Fragment>
                <Link className="navbar-item" to="/clients">
                  Clients
                </Link>
                <Link className="navbar-item" to="" onClick={this.logout}>
                  Log out
                </Link>
              </Fragment>
            ) : (
              <Fragment>
                <Link className="navbar-item" to="/signup">
                  Signup
                </Link>
                <Link className="navbar-item" to="/signin">
                  Sign In
                </Link>
              </Fragment>
            )}
          </div>
        </nav>
      </header>
    )
  }
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

const mutation = gql`
  mutation {
    logout {
      firstName
    }
  }
`

export default graphql(mutation)(graphql(query, mutation)(Header))
