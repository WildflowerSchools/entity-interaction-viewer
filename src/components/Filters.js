import React, { useState, useRef } from 'react';
import { css } from 'emotion';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import Field from './Field';
import Button from './Button';
import Select from './Select';
import charts from '../charts';

const styles = css`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  ${require('react-day-picker/lib/style.css').toString()}

  .wfs-field {
    flex: 1 0 auto;
    margin-right: 0.9375em;
  }

  .DayPickerInput input {
    font-size: 1em;
    height: 40px;
  }
  .DayPicker-Day {
    border-radius: 0;
    font-weight: 400;

    &:hover:not(.DayPicker-Day--outside):not(.DayPicker-Day--disabled) {
      color: #FFF !important;
      background-color: #20A79F !important;
    }
  }
  .DayPicker-Day--today {
    color: inherit;
    font-weight: 400;
  }
  .DayPicker-Day--start:not(.DayPicker-Day--outside),
  .DayPicker-Day--end:not(.DayPicker-Day--outside),
  .DayPicker-Day--selected:not(.DayPicker-Day--outside) {
    color: #069A91 !important;
    background-color: rgba(35,181,173,0.1) !important;
    font-weight: 400;
  }

  button svg {
    width: 22px;
  }
`

const initialState = {
  chart: '',
  student: '',
  startDate: undefined,
  endDate: undefined
};

function formatDate(date) {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function Filters({students}) {

  const [ state, setState ] = useState(initialState);
  const { chart, student, startDate, endDate } = state;

  const endRef = useRef();
  const today = new Date();

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

  function reset() {
    setState(initialState);
  }

  function refresh() {
    alert(JSON.stringify(state));
  }

  students = [
    {value: null, label: 'All Students'}
  ].concat(students);

  return (
    <form className={styles}>
      <div className="wfs-field">
        <label className="wfs-label">Display</label>
        <Select
          value={chart}
          options={charts}
          onChange={onChartChange}
        />
      </div>
      <Field label="Student">
        <Select
          value={student}
          options={students}
          onChange={onStudentChange}
        />
      </Field>
      <Field label="Time Frame">
        <DayPickerInput
          value={startDate}
          formatDate={formatDate}
          placeholder="Start Date"
          onDayChange={onStartDateChange}
          dayPickerProps={{
            toMonth: endDate || today,
            modifiers: {start: startDate, end: endDate},
            selectedDays: [startDate, {from: startDate, to: endDate}],
            disabledDays: {after: today},
            onDayClick: () => endRef.current.getInput().focus()
          }}
        />
        <DayPickerInput
          ref={endRef}
          value={endDate}
          formatDate={formatDate}
          placeholder="End Date"
          onDayChange={onEndDateChange}
          dayPickerProps={{
            fromMonth: startDate,
            toMonth: today,
            month: startDate,
            modifiers: {start: startDate, end: endDate},
            selectedDays: [startDate, {from: startDate, to: endDate}],
            disabledDays: {before: startDate, after: today}
          }}
        />
      </Field>
      <Button onClick={refresh}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
          <title>Refresh</title>
          <path fill="currentColor" fillRule="evenodd" d="M11 19.356c-4.537 0-8.25-3.712-8.25-8.25 0-4.537 3.713-8.25 8.25-8.25 2.269 0 4.331.963 5.775 2.475l-4.4 4.4H22V.106l-3.231 3.232A10.964 10.964 0 0 0 11 .106c-6.05 0-11 4.95-11 11s4.88 11 11 11c5.065 0 9.268-3.383 10.588-8h-2.91c-1.171 3.098-4.196 5.25-7.678 5.25z"/>
        </svg>
      </Button>
    </form>
  )
}

export default Filters;