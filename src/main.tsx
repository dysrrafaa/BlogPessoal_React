import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './pages/home/home.tsx';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);