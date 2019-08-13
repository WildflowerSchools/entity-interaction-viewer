import React, { useRef } from 'react';
import { css } from 'emotion';
import { useAuth } from '../context/auth';
import { useComponentSize } from '../hooks';
import Landing from './Landing';
import Login from './Login';

const styles = css`
  font-size: 16px;
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
  .wfs-footer {
    font-size: 0.8125em;
    color: #808080;
  }
`

function App(props) {

  const ref = useRef();
  const { width } = useComponentSize(ref);
  const { isAuthed } = useAuth();

  return (
    <div ref={ref} className={styles}>
      {window.debug('embed width: ' + width)}
      {isAuthed ? <Landing /> : <Login />}
    </div>
  );
}

export default App;