import React from 'react';
import { css } from 'emotion';
import { noop } from '../utils';

const styles = css`
  display: block;
  font-size: 1em;
  font-family: inherit;
  color: inherit;
  line-height: 1.3;
  padding: .6em 1.4em .5em .8em;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
  border-radius: 3px;
  background-color: #fff;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
  background-repeat: no-repeat, repeat;
  background-position: right .7em top 50%;
  background-size: .65em auto;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #222;
    outline: none;
  }
  &::-ms-expand {
    display: none;
  }
`

function Select(props) {

  function onChange(event) {
    const value = event.target.value;
    props.onChange(value);
  }

  return (
    <select className={styles} value={props.value} onChange={onChange}>
      {props.options.map(item => <option key={item.value} value={item.value || ''}>{item.label}</option>)}
    </select>
  );
}

Select.defaultProps = {
  value: null,
  options: [],
  onChange: noop
};

export default Select;