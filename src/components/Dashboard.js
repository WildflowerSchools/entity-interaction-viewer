import React, { useState, useMemo } from 'react';
import { useQuery } from '../context/data';
// import Footer from './Footer';
import Filters from './Filters';
import charts, { config } from '../charts';
import { isEmpty, noop } from '../utils';

const initialState = {
  chart: 'interactions',
  student: 'p0008',
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
      {window.debug(config)}
    </React.Fragment>
  );
}

export default Dashboard;