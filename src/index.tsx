import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LocationProvider } from './contexts/location';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <LocationProvider>
      <App />
    </LocationProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
reportWebVitals();
