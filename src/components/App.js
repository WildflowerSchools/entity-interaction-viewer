import React from 'react';
import { css } from 'emotion';
import { useAuth } from '../context/auth';
import Landing from './Landing';
import Login from './Login';

const styles = css`
  * { box-sizing: border-box; }
  font-size: 16px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  outline: #F00 1px dotted;
`

function App(props) {

  const { isAuthed } = useAuth();

  return (
    <div className={styles}>
      {isAuthed ? <Landing /> : <Login />}
    </div>
  );
}

export default App;