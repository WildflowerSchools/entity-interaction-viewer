import React from 'react';
import { render } from 'react-dom';
import domready from 'domready'
import { isObject, isString } from './utils';
import Providers from './context';
import App from './components/App';

const defaults = {
  target: null,
  prefix: 'wfs-',
  breakpoints: {
    sm: 400,
    md: 600,
    lg: 800
  }
};

domready(() => {

  if (!window.wildflower || !isObject(window.wildflower.o)) {
    console.warn(`[wildflower] embed not initialized`);
    return;
  }

  const options = Object.assign({}, defaults, window.wildflower.o);
  const container = document.createElement('div');
  container.id = 'wildflower';

  if (isString(options.target)) {
    const target = document.querySelector(options.target);
    target ? target.appendChild(container) : console.warn(`[wildflower] could not embed into ${options.target}`);
  } else {
    // TODO: change this to something more specific like cdn.wildflowerschools.org/viewer
    const script = document.querySelector(`script[src*="bundle"]`);
    script.parentElement.insertBefore(container, script);
  }

  const app = (
    <Providers>
      <App breakpoints={options.breakpoints} />
    </Providers>
  );

  render(app, container);
});