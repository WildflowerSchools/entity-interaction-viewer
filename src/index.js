import React from 'react';
import { render } from 'react-dom';
import { isString } from './utils';
import Providers from './context';
import App from './components/App';

const wildflower = window.wildflower || {};
window.wildflower = wildflower;

wildflower.embed = (id, options = {}) => {

  document.addEventListener('DOMContentLoaded', event => {

    const container = document.createElement('div');
    container.id = 'wildflower';

    if (isString(options.target)) {
      const target = document.querySelector(options.target);
      target ? target.appendChild(container) : console.warn(`[wildflower] could not embed into "${options.target}"`);
    } else {
      // TODO: change this to something more specific like cdn.wildflowerschools.org/viewer
      const script = document.querySelector(`script[src*="bundle"]`);
      script.parentElement.insertBefore(container, script);
    }

    render(
      <Providers>
        <App />
      </Providers>,
      container
    );
  });
};