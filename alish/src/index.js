import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Darkcontextprovider from './context/darkmode';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Darkcontextprovider>
      <App />
    </Darkcontextprovider>
  </React.StrictMode>

);


