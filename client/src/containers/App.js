import React, { Component } from 'react'
// import 'App.css'
import ArticlesContainer from './ArticlesContainer.js'

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