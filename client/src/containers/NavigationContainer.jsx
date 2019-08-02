// @flow
import React, { Component } from 'react'

import UserCard from '../components/UserCard.jsx'

const divStyle = {

  margin: '5px',
  padding: '10px',
  border: '2px solid #100431'
};


class NavigationContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo: []
    }
  }

  componentDidMount() {
    this.getUser()
  }

  getUser() {
    fetch('/api/users/1')
      .then(response => response.json())
      .then(userData => {
        if (userData) {
          this.setState({ userInfo: userData })
        } else {
          this.setState({ userInfo: [] })
        }
      })
  }

  render() {
    return (
      <div className="NavigationContainer" style={divStyle}>
        <h3>Navigation Pane!</h3>
        <UserCard userInfo={this.state.userInfo} />
      </div>
    )
  }
}

export default NavigationContainer;