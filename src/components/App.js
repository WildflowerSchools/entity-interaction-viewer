import React, { useRef } from 'react';
import { css } from 'emotion';
import { useAuth } from '../context/auth';
import { useBreakpoints } from '../hooks';
import Dashboard from './Dashboard';
import Login from './Login';

// const concentrations = {
//   CONCENTRATION: 'Concentration',
//   DISTRACTED_WORKING: 'Distracted Working',
//   DISORDER: 'Disorder'
// };

// const engagements = {
//   GA: 'Group Activity',
//   GL: 'Getting Lesson',
//   HA: 'Horsing Around',
//   Wait: 'Waiting',
//   Wd: 'Wandering',
//   W: 'Working',
//   S: 'Snacking',
//   Obs: 'Observing',
//   Other: 'Other'
// };

// const interactions = {
//   COMPLETELY: 'Completely',
//   PARTIAL: 'Partial',
//   NOT: 'Not'
// };

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
  .wfs-tooltip {
    position: absolute;
    z-index: 10;
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s;
  }
  .wfs-tooltip.active {
    opacity: 1;
    visibility: visible;
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