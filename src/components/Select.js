import React from 'react';
import { isEmpty, noop } from '../utils';

function Select(props) {

  function onChange(event) {
    const value = event.target.value;
    props.onChange(value);
  }

  const options = props.options.map(({value, label, disabled}) => (
    <option key={value} value={value || ''} disabled={disabled}>{label}</option>
  ))

  return (
    <select value={props.value} onChange={onChange} className={`wfs-select${isEmpty(props.value) ? ' wfs-select--is-empty' : ''}`}>
      {options}
    </select>
  );
}

Select.defaultProps = {
  value: null,
  options: [],
  onChange: noop
};

export default Select;