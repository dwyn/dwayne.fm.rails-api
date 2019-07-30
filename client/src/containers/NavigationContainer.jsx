import React, { Component } from 'react'
import UserCard from '../components/UserCard.jsx'


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
      <div className="NavigationContainer">
        <h3>Navigation Pane!</h3>
        <UserCard userInfo={this.state.userInfo}/>
      </div>
    )
  }
}

export default NavigationContainer;