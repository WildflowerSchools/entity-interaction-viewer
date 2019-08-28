import React from 'react';
import { noop } from '../utils';

function Select(props) {

  function onChange(event) {
    const value = event.target.value;
    props.onChange(value);
  }

  const options = props.options.map(({value, label, disabled}) => (
    <option key={value} value={value || ''} disabled={disabled}>{label}</option>
  ))

  return (
    <select className="wfs-select" value={props.value} onChange={onChange}>
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