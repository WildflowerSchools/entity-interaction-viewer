import React from 'react';
import { css } from 'emotion';
import { noop } from '../utils';

const styles = css`
  display: block;
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0.75em 1.5em 0.75em 0.85em;
  font-size: 0.9375em;
  font-family: inherit;
  line-height: 1.3;
  color: #3C3C3C;
  border: 1px solid #D9D9D9;
  box-shadow: 0 1px 0 1px rgba(0,0,0,0.04);
  border-radius: 3px;
  background-color: #FFF;
  background-image: url("data:image/svg+xml,%0A%3Csvg width='13px' height='6px' viewBox='0 0 13 6' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Group' transform='translate(-457.000000, -339.000000)' fill='%23808080'%3E%3Cpolygon id='arrow' points='457.777344 339.030375 463.777344 345.030375 469.777344 339.030375'%3E%3C/polygon%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1em top 50%;
  background-size: 0.85em auto;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:focus {
    border: 1px solid #BBB;
    box-shadow: 0 0 1px 3px rgba(32,167,159,0.25);
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