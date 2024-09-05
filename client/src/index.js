import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'; // Ensure it's imported here
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Router> {/* BrowserRouter wraps the whole app here */}
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
