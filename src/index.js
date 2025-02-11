import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Client from './lib/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
const client = new Client(localStorage.getItem('host-url') || 'http://elastic:password@localhost:9200');
root.render(
  <React.StrictMode>
    <App client={client} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();