import React, { Fragment, Component } from 'react'
import ParcelLogo from '../img/logo.svg'
import { Link } from 'react-router-dom'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Query, Mutation, ApolloConsumer } from 'react-apollo'
import { withRouter } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <img width="60" src={ParcelLogo} alt="" />
            </Link>
          </div>
          <div className="navbar-end">
            <Query query={query}>
              {({ data, loading }) => {
                return data.loggedIn ? (
                  <Fragment>
                    <Link className="navbar-item" to="/clients">
                      Clients
                    </Link>
                    <ApolloConsumer>
                      {client => (
                        <Mutation mutation={mutation}>
                          {logout => (
                            <Link
                              className="navbar-item"
                              to=""
                              onClick={e => {
                                e.preventDefault()
                                logout().then(() => {
                                  client.writeData({ data: { loggedIn: false } })
                                  this.props.history.push('/signin')
                                })
                              }}
                            >
                              Log out
                            </Link>
                          )}
                        </Mutation>
                      )}
                    </ApolloConsumer>
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
                )
              }}
            </Query>
          </div>
        </nav>
      </header>
    )
  }
}

const query = gql`
  query isAuthenticated {
    loggedIn @client
  }
`

const mutation = gql`
  mutation logout {
    logout {
      firstName
    }
  }
`

export default withRouter(Header)
