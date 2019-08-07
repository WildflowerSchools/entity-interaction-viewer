import React from 'react';
import { render } from 'react-dom';
import { isString } from './utils';
import Providers from './context';
import App from './components/App';

const domready = (function() {

  const fns = [];
  const doc = typeof document === 'object' && document;
  const hack = doc && doc.documentElement.doScroll;
  const loaded = doc && (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);
  let listener;

  if (!loaded && doc) {
    doc.addEventListener('DOMContentLoaded', listener = function() {
      doc.removeEventListener('DOMContentLoaded', listener);
      while (listener = fns.shift()) listener()
      loaded = true
    });
  }

  return fn => loaded ? setTimeout(fn, 0) : fns.push(fn);

})();

domready(() => {

  const options = (window.wildflower && window.wildflower.o) || {};
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

  render(
    <Providers>
      <App />
    </Providers>,
    container
  );
})

/* const wildflower = window.wildflower || {};
window.wildflower = wildflower;

wildflower.embed = (options = {}) => {

  document.addEventListener('DOMContentLoaded', event => {

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

    render(
      <Providers>
        <App />
      </Providers>,
      container
    );
  });
}; */