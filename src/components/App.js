import React, { useRef } from 'react';
import { css } from 'emotion';
import { useAuth } from '../context/auth';
import { useBreakpoints } from '../hooks';
import Dashboard from './Dashboard';
import Login from './Login';

const styles = css`
  font-size: 16px;
  font-family: -apple-system, sans-serif;
  max-width: 100%;

  * {
    box-sizing: border-box;
  }
  a {
    color: #20A79F;
    text-decoration: none;

    &:hover {
      color: #0E928A;
      text-decoration: underline;
    }
  }
  hr {
    margin: 1.5em 0;
  }
  .wfs-label {
    display: block;
    margin: 0 0 0.25em 2px;
    font-size: 0.8125em;
    color: #808080;
  }
  .wfs-footer {
    font-size: 0.8125em;
    color: #808080;
  }
  .wfs-tooltip {
    font-size: 0.8125em;
  }
  .wfs-chart {
    margin: 1.5em 0;
  }
`

function App(props) {

  const { isAuthed } = useAuth();
  const ref = useRef();
  useBreakpoints(ref, props.breakpoints);

  return (
    <div ref={ref} className={styles}>
      {isAuthed ? <Dashboard /> : <Login />}
    </div>
  );
}

export default App;