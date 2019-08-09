import React, { useState, useMemo, useRef } from 'react';
import { css } from 'emotion';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import Select from 'react-select';
import Field from './Field';
import Button from './Button';

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
      background-color: rgba(35,181,173,0.15) !important;
    }
  }
  .DayPicker-Day--today {
    color: #20A79F;
  }
  .DayPicker-Day--start:not(.DayPicker-Day--outside) {
    color: #FFF !important;
    background-color: #20A79F !important;
  }
  .DayPicker-Day--end:not(.DayPicker-Day--outside) {
    color: #FFF !important;
    background-color: #20A79F !important;
  }
  .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    color: #FFF !important;
    background-color: #20A79F !important;
  }
`

function formatDate(date) {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

const initialState = {
  display: 'bar',
  student: '',
  startDate: undefined,
  endDate: undefined
};

function Filters(props) {

  const [ state, setState ] = useState(initialState);
  const { startDate, endDate } = state;

  const endRef = useRef();
  const today = new Date();

  function onDisplayChange({value}) {
    setState(state => ({...state, display: value}));
  }

  function onStudentChange({value}) {
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

  const displays = [
    {value: 'bar', label: 'Bar Chart'},
    {value: 'timeline', label: 'Timeline'}
  ];

  const students = useMemo(() => ([
    {value: null, label: 'All Students'},
    {value: '123', label: 'Johnny Anderson'},
    {value: '345', label: 'Jenny Wallen'},
    {value: '567', label: 'Jane Doe'}
  ]), []);

  return (
    <div className={styles}>
      <Field label="Display">
        <Select
          options={displays}
          onChange={onDisplayChange}
        />
      </Field>
      <Field label="Student">
        <Select
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
            month: startDate,
            fromMonth: startDate,
            toMonth: today,
            modifiers: {start: startDate, end: endDate},
            selectedDays: [startDate, {from: startDate, to: endDate}],
            disabledDays: {before: startDate, after: today}
          }}
        />
      </Field>
      <Button onClick={refresh}>Refresh</Button>
    </div>
  )
}

export default Filters;