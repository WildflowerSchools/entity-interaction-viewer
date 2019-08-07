import React from 'react';
import { useAuth } from '../context/auth';
import Button from './Button';
import Chart from './Chart';

const data = {
  labels: [
    '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm'
  ],
  datasets: [{
    name: 'Mikey',
    type: 'bar',
    values: [25, 40, 30, 35, 8, 52, 17, 4]
  }, {
    name: 'Molly',
    type: 'bar',
    values: [23, 50, 10, 15, 18, 32, 27, 14]
  }, {
    name: 'Johnny',
    type: 'line',
    values: [15, 5, 4, 13, 3, 13, 20, 20]
  }, {
    name: 'Jenny',
    type: 'line',
    values: [10, 12, 15, 16, 15, 29, 4, 2, 3]
  }],
  yMarkers: [{
    label: 'Extra Credit',
    value: 55,
    options: {labelPos: 'left'}
  }],
  yRegions: [{
    label: 'Average',
    start: 10,
    end: 30,
    options: {labelPos: 'left'}
  }],
};

function Landing(props) {

  const { logout } = useAuth();

  return (
    <div>
      <Button onClick={logout}>Logout</Button>
      <Chart data={data} />
    </div>
  );
}

export default Landing;