import React from 'react';
import { render } from 'react-dom';

import App from './components/App.jsx';

import style from './scss/style.scss';

render(
  (
    <App />
  ),
  document.getElementById('app')
);
