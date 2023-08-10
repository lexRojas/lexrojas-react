import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
document.title = 'LexRojas Tools';
document.documentElement.lang = "es"

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
