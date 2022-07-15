/** @license
 * Copyright (c) [EXAMPLE]
 *
 */
import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './routes/App';

import './assets/styles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);