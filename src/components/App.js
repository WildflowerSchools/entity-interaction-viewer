import React, { useRef } from 'react';
import { useAuth } from '../hooks';
import { useBreakpoints } from '../hooks';
import Dashboard from './Dashboard';
import Login from './Login';
import styles from '../styles';

function App(props) {

  const { isAuthed } = useAuth();
  const ref = useRef();

  useBreakpoints(ref, props.breakpoints);

  return (
    <div ref={ref} className="wfs-app">
      {isAuthed ? <Dashboard /> : <Login />}
    </div>
  );
}

export default App;