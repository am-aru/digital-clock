import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'; // Import the main App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Ensure your `public/index.html` has an element with id `root`
);
