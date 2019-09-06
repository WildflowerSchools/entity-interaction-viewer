import React, { useState, useMemo } from 'react';
import { useQuery } from '../hooks';
import Footer from './Footer';
import Filters from './Filters';
import charts from '../charts';
import { isEmpty } from '../utils';

const initialState = {
  chart: 'Timeline',
  student: 'p0009',
  startDate: '',
  endDate: ''
};

function Dashboard(props) {

  const [ state, setState ] = useState(initialState);
  const { chart, student, startDate, endDate } = state;
  const { data, isLoading } = useQuery('TODO: add GraphQL to DataProvider');

  function onChartChange(value) {
    setState(state => ({...state, chart: value}));
  }

  function onStudentChange(value) {
    setState(state => ({...state, student: value}));
  }

  function onStartDateChange(value) {
    setState(state => ({...state, startDate: value}));
  }

  function onEndDateChange(value) {
    setState(state => ({...state, endDate: value}));
  }

  const students = useMemo(() => {
    return data.map(({person_id: id, name}) => ({id, name})).sort((a, b) => a.name < b.name ? -1 : 1)
  }, []);

  // TODO: loading state / spinner component while querying data?
  // TODO: style default "no selections" landing view
  let content = <div className="wfs-landing"></div>;
  // TODO: this logic may need to change when live queries and dates are used
  const hasChart = !isEmpty(chart) && !isEmpty(student);

  if (hasChart) {
    const Chart = charts.find(c => c.name === chart).component;
    content = <Chart data={data.find(d => d.person_id === student)} />
  }

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
      {content}
      <Footer />
      <hr />
      {window.debug(state)}
      {window.debug(require('../charts').config)}
    </React.Fragment>
  );
}

export default Dashboard;