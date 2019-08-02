import React, { Component } from 'react'
import ArticlesContainer from './ArticlesContainer'

// const divStyle = {
//   margin: '40px',
//   border: '5px solid #100431'
// };

class MainContainer extends Component {

  render() {
    return (
      <React.Fragment >
        <ArticlesContainer />

      </React.Fragment>
    )
  }
}

export default MainContainer;