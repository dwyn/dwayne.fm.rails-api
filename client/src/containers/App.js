import React, { Component } from 'react'
import './App.css'
import NavigationContainer from './NavigationContainer.jsx'
import ArticlesContainer from './ArticlesContainer.jsx'
import FooterContainer from './FooterContainer.jsx'


class App extends Component {
  render() {
    return (
      
      <div className="App">

        {/* <NavigationContainer /> */}
        <ArticlesContainer />
        {/* <FooterContainer /> */}
        
        
      </div>
    )
  }
};

export default App