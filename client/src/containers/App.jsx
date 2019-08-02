import React, { Component } from 'react'
// import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavigationContainer from './NavigationContainer';
import ArticlesContainer from './ArticlesContainer';
import FooterContainer from './FooterContainer';
import MainContainer from './MainContainer';
import NaviBar from './NaviBar';
import { NoMatch } from '../components/NoMatch';
import { Layout } from '../components/Layout';



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationContainer />

          <Layout>
            <Switch>
              <Route exact path="/" component={MainContainer} />
              {/* <Route component={NoMatch} /> */}
            </Switch>
          </Layout>

          <FooterContainer />
          
        </Router>
      </React.Fragment>
    )
  }
};

export default App