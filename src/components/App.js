import React, { useRef, useState } from 'react';
import { css } from 'emotion';
import { useAuth } from '../context/auth';
import { useBreakpoints } from '../hooks';
import Landing from './Landing';
import Login from './Login';

const breakpoints = {
  sm: 400,
  md: 600,
  lg: 800
};

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

  const { isAuthed } = useAuth();
  const [ clicks, setClicks ] = useState(0);

  const ref = useRef();
  useBreakpoints(ref, breakpoints);

  return (
    <div ref={ref} className={styles} onClick={() => setClicks(clicks + 1)}>
      {clicks}
      {isAuthed ? <Landing /> : <Login />}
    </div>
  );
}

export default App;