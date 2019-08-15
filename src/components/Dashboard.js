import React, { useState, useMemo } from 'react';
import { useQuery } from '../context/data';
// import Footer from './Footer';
import Filters from './Filters';
import charts from '../charts';
import { isEmpty, noop } from '../utils';

const initialState = {
  chart: 'engagement',
  student: 'p0006',
  startDate: '',
  endDate: ''
};

function Dashboard(props) {

  const [ state, setState ] = useState(initialState);
  const { chart, student, startDate, endDate } = state;
  const { data } = useQuery('TODO');

  function onChartChange(value) {
    setState(state => ({...state, chart: value}));
  }

  function onStudentChange(value) {
    setState(state => ({...state, student: value}));
  }

  function onStartDateChange(date) {
    setState(state => ({...state, startDate: date}));
  }

  function onEndDateChange(date) {
    setState(state => ({...state, endDate: date}));
  }

  const students = useMemo(() => {
    return data.map(entry => ({
      value: entry.person_id,
      label: entry.name
    })).sort((a, b) => a.label < b.label ? -1 : 1)
  }, []);

  const Chart = !isEmpty(chart) ? charts.find(c => c.value === chart).component : noop;

  return (
    <React.Fragment>
      <Filters
        charts={charts}
        students={students}
        chart={chart}
        student={student}
        startDate={startDate}
        endDate={endDate}
        onChartChange={onChartChange}
        onStudentChange={onStudentChange}
        onStartDateChange={onStartDateChange}
        onEndDateChange={onEndDateChange}
      />
      {student && <Chart data={data.find(d => d.person_id === student)} />}
      {/* <Chart
        type="engagement"
        width={500}
        height={400}
        data={[data[0]]}
      /> */}
      {/* <Footer /> */}
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