// src/main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App'; // Remove the file extension .tsx
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
);
