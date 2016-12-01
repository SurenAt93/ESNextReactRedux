import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    const {name, surename, age} = this.props.user
    return <h1>Hello world {name} {surename} jan! He is {age} years old!</h1>
  }
}

function mapStateToProps(state) {
  return {
    user: state
  }
}

export default connect(mapStateToProps)(App)