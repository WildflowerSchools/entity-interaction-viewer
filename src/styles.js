import { css } from 'emotion';

export default css`

  font-size: 16px;
  font-family: sans-serif;
  max-width: 100%;

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  a {
    color: #20A79F;
    text-decoration: none;

    &:focus,
    &:hover {
      color: #00867E;
    }
  }
  .wfs-login {
    /* TODO: style login view */
  }
  .wfs-filters {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 1.5em;
  }
  .wfs-field {
    flex: 1 0 auto;
    margin-right: 0.9375em;
  }
  .wfs-label {
    display: block;
    margin: 0 0 0.33em 5px;
    font-size: 0.8125em;
    color: #808080;
  }
  .wfs-select {
    display: block;
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 0.75em 1.5em 0.75em 0.9em;
    font-size: 0.9375em;
    font-family: inherit;
    line-height: 1.3;
    color: currentColor;
    border: 1px solid #D9D9D9;
    border-radius: 3px;
    box-shadow: 0 1px 0 1px rgba(0,0,0,0.04);
    background-color: #FFF;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 13 6'%3E%3Cpath fill='%23808080' fill-rule='evenodd' d='M.78.03l6 6 6-6z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 1em top 50%;
    background-size: 0.85em auto;
    outline: none;
    transition: all 0.15s;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &:focus {
      border: 1px solid #CCC;
      box-shadow: 0 0 1px 3px rgba(32,167,159,0.2);
    }
    &::-ms-expand {
      display: none;
    }
  }
  .wfs-btn {
    display: inline-block;
    position: relative;
    margin: 0;
    padding: 0.75em 1.5em;
    font-size: 1em;
    line-height: 1;
    color: #FFF;
    border: none;
    border-radius: 3px;
    background-color: #20A79F;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    white-space: nowrap;
    outline: none;
    cursor: pointer;
    transition: all 0.2s;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:focus,
    &:hover {
      background-color: #00867E;
    }
  }

  ${require('react-day-picker/lib/style.css').toString()}

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

  .wfs-chart {
    margin: 2em 0 1em 0;
  }
  .wfs-tooltip {
    font-size: 0.8125em;
  }
  .wfs-footer {
    font-size: 0.8125em;
    color: #808080;

    span:after {
      content: '\\2022';
      margin: 0 0.5em;
    }
  }
  `