import React from 'react';
import { render } from 'react-dom';
import Providers from './context';
import App from './components/App';

render(
  <Providers>
    <App />
  </Providers>,
  document.getElementById('root')
);