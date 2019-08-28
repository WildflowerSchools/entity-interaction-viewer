import React, { useRef } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import Select from './Select';

function formatDate(date) {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function Filters({
  charts,
  students,
  chart,
  student,
  startDate,
  endDate,
  onChartChange,
  onStudentChange,
  onStartDateChange,
  onEndDateChange
}) {

  const endRef = useRef();
  const today = new Date();

  const chartOptions = [
    {value: '', label: 'Select Display'},
    {value: null, label: '──────────', disabled: true}
  ].concat(charts);

  const studentOptions = [
    {value: '', label: 'Select Student'},
    {value: null, label: '──────────', disabled: true}
  ].concat(students.map(s => ({value: s.id, label: s.name})));

  return (
    <form className="wfs-filters">

      <div className="wfs-field wfs-field-display">
        <label className="wfs-label">Display</label>
        <Select
          value={chart}
          options={chartOptions}
          onChange={onChartChange}
        />
      </div>

      <div className="wfs-field wfs-field-student">
        <label className="wfs-label">Student</label>
        <Select
          value={student}
          options={studentOptions}
          onChange={onStudentChange}
        />
      </div>

      <div className="wfs-field wfs-field-date">
        <label className="wfs-label">Time Frame</label>
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
            fromMonth: startDate || null,
            toMonth: today,
            month: startDate,
            modifiers: {start: startDate, end: endDate},
            selectedDays: [startDate, {from: startDate, to: endDate}],
            disabledDays: {before: startDate, after: today}
          }}
        />
      </div>

    </form>
  )
}

export default Filters;