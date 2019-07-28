import React, { Component } from 'react'
import ArticlesContainer from './ArticlesContainer.js'
import 'App.css'
// import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'
class App extends Component {
  render() {
    return (
      
      <div className="App">
        <h3>This is the app component</h3>
        <ArticlesContainer/>
      </div>
    )
  }
};

export default App