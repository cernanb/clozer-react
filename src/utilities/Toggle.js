import React, { Component } from 'react'

export default class Toggle extends Component {
   state = {
      on: false
   }

   toggle = () => {
      this.setState({ on: !this.state.on })
   }
   render() {
      const { children } = this.props
      const { toggle } = this
      const { on } = this.state
      return this.props.children({ on, toggle })
   }
}
