import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './components/Home/home.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

import Amplify, { Auth } from 'aws-amplify';

Amplify.configure({});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
