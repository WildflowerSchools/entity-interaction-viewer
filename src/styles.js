
// pass-through tagged template function to enable css syntax highlighting
function css(strings, ...vars) {
  return strings.map((str, i) => `${str}${vars[i] || ''}`).join('');
}

// TODO: expand this color palette with some better grays
const colors = {
  primary: '#20A79F',
  gray: '#808080',
  grayDark: '#2B2B2B',
  grayLight: '#BBBBBB'
};

// We're generally avoiding using semantic markup (h1, h2, ul etc)
// to prevent situations where a host page styles are overy specific
// and cause conflicts with our base styles

const styles = document.createTextNode(css`

  .wfs-app {
    font-size: 16px;
    font-family: sans-serif;
    color: ${colors.grayDark};
    max-width: 100%;
  }
  .wfs-app *,
  .wfs-app *:before,
  .wfs-app *:after {
    box-sizing: border-box;
  }
  .wfs-app ul,
  .wfs-app ol {
    list-style: none;
  }
  .wfs-app a {
    color: ${colors.primary};
    text-decoration: none;
  }
  .wfs-app a:focus,
  .wfs-app a:hover {
    color: #00867E;
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
  .wfs-filters > * + * {
    margin-left: 15px;
  }
  .wfs-field {
    flex: 1 0 auto;
  }
  .wfs-field-date {
    width: 400px;
  }
  .wfs-label {
    display: block;
    margin: 0 0 0.33em 5px;
    font-size: 0.8125em;
    color: ${colors.gray};
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
    background-color: ${colors.primary};
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
  }
  .wfs-btn:focus,
  .wfs-btn:hover {
    background-color: #00867E;
  }
  .wfs-select {
    display: block;
    width: 100%;
    max-width: 100%;
    height: 45px;
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
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  .wfs-select--is-empty {
    color: ${colors.gray};
  }
  .wfs-select::-ms-expand {
    display: none;
  }

  /* https://github.com/gpbl/react-day-picker/blob/master/src/style.css */
  ${require('react-day-picker/lib/style.css').toString()}

  .DayPickerInput {
    position: relative;
    width: 50%;
    height: 45px;
    border: 1px solid #D9D9D9;
    box-shadow: 0 1px 0 1px rgba(0,0,0,0.04);
    background-color: #FFF;
  }
  .DayPickerInput:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 2.5em;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21 20'%3E%3Cpath fill='%23${colors.primary.slice(1)}' fill-rule='nonzero' d='M18.3 2.41h-1.92v1.16c0 .2-.18.38-.39.38h-.77a.39.39 0 0 1-.38-.38V2.4H5.6v1.16c0 .2-.18.38-.39.38h-.77a.39.39 0 0 1-.38-.38V2.4H2.15c-1.06 0-1.93.87-1.93 1.93V17.4c0 1.06.87 1.93 1.93 1.93H18.3c1.06 0 1.92-.87 1.92-1.93V4.34c0-1.06-.86-1.93-1.92-1.93zm.38 14.43c0 .53-.43.96-.96.96h-15a.96.96 0 0 1-.96-.96V8.18c0-.2.17-.38.39-.38H18.3c.21 0 .38.17.38.38v8.66zM5.61 1.26a.39.39 0 0 0-.39-.38h-.77a.39.39 0 0 0-.38.38v1.15H5.6V1.26zm10.77 0a.39.39 0 0 0-.39-.38h-.77a.39.39 0 0 0-.38.38v1.15h1.54V1.26z'/%3E%3C/svg%3E");
    background-size: auto 55%;
    background-position: 0.9em 48%;
    background-repeat: no-repeat;
    cursor: default;
  }
  .DayPickerInput:first-of-type {
    border-radius: 3px 0 0 3px;
  }
  .DayPickerInput:last-of-type {
    border-radius: 0 3px 3px 0;
    border-left: 0;
  }
  .DayPickerInput:last-of-type .DayPickerInput-Overlay {
    left: auto;
    right: 0;
  }
  .DayPickerInput input {
    width: 100%;
    height: 100%;
    padding: 0.75em 1.5em 0.75em 3.25em;
    font-size: 0.9375em;
    font-family: inherit;
    line-height: 1.3;
    color: currentColor;
    background-color: transparent;
    border: 0;
    outline: none;
  }
  .DayPickerInput input::-webkit-input-placeholder { color: ${colors.gray}; }
  .DayPickerInput input::-moz-placeholder          { color: ${colors.gray}; }
  .DayPickerInput input:-ms-input-placeholder      { color: ${colors.gray}; }
  .DayPickerInput input:-moz-placeholder           { color: ${colors.gray}; }
  .DayPickerInput input::placeholder               { color: ${colors.gray}; }

  .DayPickerInput-Overlay {
    margin-top: 1px;
    border-top: 0;
    border-radius: 0 0 3px 3px;
    z-index: 100;
  }
  .DayPicker-Caption > div {
    font-size: 1em;
    font-weight: 700;
  }
  .DayPicker-NavButton {
    width: 1em;
    height: 1em;
    color: ${colors.gray};
  }
  .DayPicker-Day {
    font-size: 0.9375em;
    font-weight: 400;
    line-height: 1;
    border-radius: 0;
  }
  .DayPicker-Day:hover:not(.DayPicker-Day--outside):not(.DayPicker-Day--disabled) {
    color: #FFF !important;
    background-color: ${colors.primary} !important;
  }
  .DayPicker-Day--start:not(.DayPicker-Day--outside),
  .DayPicker-Day--end:not(.DayPicker-Day--outside),
  .DayPicker-Day--selected:not(.DayPicker-Day--outside) {
    font-weight: 400;
    color: ${colors.primary} !important;
    background-color: #F5F5F5 !important;
  }
  .DayPicker-Day--today {
    color: currentColor;
  }


  .wfs-chart-header {
    margin-top: 2em;
    margin-bottom: 2em;
  }
  .wfs-chart-header strong { /* student */
    display: inline-block;
    margin-right: 0.75em;
    font-size: 1.25em;
    font-weight: 700;
  }
  .wfs-chart-header span { /* dates */
    color: ${colors.gray};
  }


  .wfs-tooltip {
    font-size: 0.8125em;
  }


  .wfs-timeline-day {
    font-size: 0.9375em;
    /* font-weight: 700; */
    margin: 1em 0;
    color: ${colors.grayLight};
  }
  .wfs-timeline-entry-header {
    display: flex;
    align-items: flex-end;
    line-height: 1;
    margin: 0.625em 0;
    cursor: pointer;
    user-select: none;
  }
  .wfs-timeline-entry-header div { /* heading */
    font-size: 0.9375em;
    font-weight: 700;
    margin-left: 3em;
    margin-right: 0.5em;
    position: relative;
  }
  .wfs-timeline-entry-header div:before { /* indicator dot */
    content: '';
    position: absolute;
    width: 1em;
    height: 1em;
    background-color: transparent;
    border: 2px solid ${colors.grayLight};
    border-radius: 100px;
    left: -1.95em;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.125s;
  }
  .wfs-timeline-entry-header time {
    font-size: 0.9em;
    width: 4.5em;
    color: ${colors.gray};
    text-align: right;
    order: -1;
  }
  .wfs-timeline-entry-header span {
    display: inline-block;
    font-size: 0.9em;
    color: ${colors.gray};
  }
  .wfs-timeline-entry-header:hover div:before,
  .wfs-timeline-entry-header--is-expanded div:before {
    background-color: ${colors.primary};
    border-color: ${colors.primary};
  }

  .wfs-timeline-entry-details {
    list-style: none;
    margin: 1.25em 0;
  }
  .wfs-timeline-entry-behavior {
    display: flex;
    align-items: center;
    line-height: 1;
    padding: 0.2em 0;
  }
  .wfs-timeline-entry-behavior > span {
    /* warning: magic numbers! Avoiding px values to be more responsive to
    font-size, but also not using rem because we have a font-size declaration on
    the top-level app embed that cascades through the rest of the app */
    width: 7.9em;
    font-size: 0.875em;
    padding-right: 1.125em;
    text-align: right;
    color: ${colors.gray};
  }
  .wfs-timeline-entry-behavior > div {
    flex: 1 0 auto;
  }
  .wfs-timeline-entry-levels {
    display: flex;
    height: 8px;
    font-size: 0;
  }
  /* border-radius and overflow: hidden on the parent element had some quirks */
  .wfs-timeline-entry-levels > div:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    overflow: hidden;
  }
  .wfs-timeline-entry-levels > div:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    overflow: hidden;
  }


  .wfs-footer {
    font-size: 0.8125em;
    margin-top: 2em;
    padding: 0 5px;
    color: ${colors.gray};
    text-align: right;
  }
  .wfs-footer span:after {
    content: '\\2022';
    margin: 0 0.5em;
  }

`);

const style = document.createElement('style');
style.appendChild(styles);
document.body.appendChild(style);