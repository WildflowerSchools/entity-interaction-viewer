import React, { useState, useMemo } from 'react';
import { useQuery } from '../context/data';
import Header from './Header';
import Footer from './Footer';
import Filters from './Filters';
import Chart from '../charts';

const charts = [
  {value: 'engagement', label: 'Engagement'},
  {value: 'bar', label: 'Bar Chart'},
  {value: 'timeline', label: 'Timeline'}
];

function Dashboard(props) {

  // const [ state, setState ] = useState({});
  const { data } = useQuery('TODO');

  const students = useMemo(() => {
    return data.map(entry => ({
      value: entry.person_id,
      label: entry.name
    })).sort((a, b) => a.label < b.label ? -1 : 1)
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Filters
        // onChartChange={null}
        // onStudentChange={null}
        // onDateChange={null}
        charts={charts}
        students={students}
      />

      <Chart
        type="engagement"
        width={650}
        height={200}
        data={[
          {name: 'W', value: 2345, percent: 0.2},
          {name: 'GA', value: 4692, percent: 0.2},
          {name: 'Wd', value: 4467, percent: 0.2},
          {name: 'HA', value: 1128, percent: 0.2},
          {name: 'S', value: 9984, percent: 0.2},
          {name: 'Obs', value: 1258, percent: 0.2},
          {name: 'Other', value: 2256, percent: 0.2},
          {name: 'GL', value: 900, percent: 0.2}
        ]}
      />

      <Footer />

      <hr />
      <h2>Concentration</h2>
      {window.debug([... new Set(data[0].concentration.map(item => item.level).filter(item => item !== ''))])}
      <hr />
      <h2>Engagement</h2>
      {window.debug([... new Set(data[0].engagement.map(item => item.level).filter(item => item !== ''))])}
      <ul>
        <li>W = Working</li>
        <li>GL = Getting Lesson</li>
        <li>GA = Doing Group Activity</li>
        <li>HA = Horsing Around</li>
        <li>Wait = Waiting</li>
        <li>Wd = Wandering</li>
        <li>S = Snacking</li>
        <li>Obs = Observing</li>
        <li>Other = Other</li>
      </ul>
      <hr />
      <h2>Interactions</h2>
      {window.debug(data[0].interactions.slice(0, 2).concat(data[0].interactions.slice(-2)))}
      <ul>
        <li>oriented towards the material</li>
        <li>looking at the material</li>
        <li>touching the material</li>
        <li>distracted</li>
        <li>performing intentional actions</li>
        <li>performing careful and slow actions</li>
      </ul>

    </React.Fragment>
  );
}

export default Dashboard;