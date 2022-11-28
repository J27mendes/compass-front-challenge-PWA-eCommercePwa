import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StyledAll } from './globalStyles/Reset';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StyledAll />
    <App />
  </React.StrictMode>
);


