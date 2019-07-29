import React, { Component } from 'react'


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
    fetch('/api/user/1')
      .then(response => response.json())
      .then(user => {
        if (user) {
          this.setState({ userInfo: userInfo })
        } else {
          this.setState({ userInfo: [] })
        }
      })
  }

  render() {
    return (
      <div className="NavigationContainer">
        <h3>Navigation Pane!</h3>
        )}
      </div>
    )
  }
}

export default NavigationContainer;