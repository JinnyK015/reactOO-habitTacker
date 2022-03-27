import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import '@fortawesome/fontawesome-free/js/all.js'
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
  <Router>
    <App/>
  </Router>
</React.StrictMode>,
  document.getElementById('root')
);

