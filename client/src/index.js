import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App.js'
import './index.css'
import 'semantic-ui-css/semantic.css'
import registerServiceWorker from './registerServiceWorker'

import 'semantic-ui-css/semantic.css'


ReactDOM.render(
  <App />,
  document.getElementById('root')
)

registerServiceWorker();
