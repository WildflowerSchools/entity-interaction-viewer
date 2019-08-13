import React from 'react';
import { useAuth } from '../context/auth';
import { useQuery } from '../context/data';
import Filters from './Filters';
import Chart from './Chart';

function Landing(props) {

  const { logout } = useAuth();
  const { data } = useQuery('some query here...');

  // TODO: can / should this be a query? useQuery(Queries.STUDENTS)
  const students = Object.values(data.reduce((result, {person}) => {
    const { person_id: id, name } = person;
    if (!result[id]) result[id] = {value: id, label: name};
    return result;
  }, {}));

  console.log(students)

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