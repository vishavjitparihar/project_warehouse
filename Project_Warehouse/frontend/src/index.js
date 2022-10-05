import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WelcomePage from './WelcomePage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WelcomePage />
    <App />
  </React.StrictMode>
);

