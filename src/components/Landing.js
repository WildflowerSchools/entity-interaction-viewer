import React, { useMemo } from 'react';
import { useAuth } from '../context/auth';
import { useQuery } from '../context/data';
import Filters from './Filters';
import Chart from './Chart';

function Landing(props) {

  const { logout } = useAuth();
  const { data } = useQuery('some query here...');

  const students = useMemo(() => {
    return data.map(entry => ({
      value: entry.person_id,
      label: entry.name
    })).sort((a, b) => a.label < b.label ? -1 : 1)
  }, []);

  return (
    <React.Fragment>

      <h1>Material Interaction Details</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>

      <Filters students={students} />
      <Chart data={data} />

      <div className="wfs-footer">
        Interaction reporting by <a href="https://wildflowerschools.org/" target="_blank">Wildflower Schools</a>
        &nbsp;&nbsp;&bull;&nbsp;&nbsp;
        <a href="#" onClick={logout}>Logout</a>
      </div>

      {window.debug(data)}

    </React.Fragment>
  );
}

export default Landing;