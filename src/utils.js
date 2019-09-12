import React from 'react';

window.debug = process.env.NODE_ENV === 'development' ? (vars, styles = {}) => (
  <pre style={{maxWidth:'100%',fontSize:13,overflow:'scroll', ...styles}}>{JSON.stringify(vars, null, 2)}</pre>
) : vars => null;

export const noop = fn => null;
export const isArray = Array.isArray;
export const toArray = Array.from;

export function isBoolean(value) {
  return typeof value === 'boolean';
};

export function toBoolean(value) {

  if (isBoolean(value)) {
    return value;
  }

  if (isString(value)) {
    switch (value.toLowerCase()) {
      case 'false':
      case 'no':
      case '0':
        return false;
      default:
        case 'true':
        case 'yes':
        case '1':
        return true;
    }
  }

  return Boolean(value);
};

export function isEmpty(value) {
  if (isUndefined(value) || value === null || value === false || value === 0) {
    return true;
  }
  if (isArray(value)) {
    return value.length === 0;
  }
  if (isString(value)) {
    return value.trim().length === 0;
  }
  if (isObject(value)) {
    return value.constructor === Object && Object.keys(value).length === 0;
  }
  return false;
};

export function isDefined(value) {
  return !isUndefined(value);
};

export function isFunction(value) {
  return typeof value === 'function';
};

export function isNumber(value) {
  return typeof value === 'number';
};

export function isNumeric(value) {
  if (isNumber(value)) return true;
  if (/^0x[0-9a-f]+$/i.test(value)) return true;
  return (/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/).test(value);
};

export function isObject(value) {
  return typeof value === 'object';
};

export function isString(value) {
  return typeof value === 'string';
};

export function isUndefined(value) {
  return typeof value === 'undefined';
};

export function toTitleCase(s) {
  return s.split(' ').map(word => {
    return word.startsWith('iP') ? word : word.charAt(0).toUpperCase() + word.slice(1)
  }).join(' ');
};

// deep clone, can't use Object.assign(...)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Deep_Clone
export function clone(source) {
  return JSON.parse(JSON.stringify(source));
};

// shamelessly ported from:
// https://github.com/jonschlinkert/time-stamp/blob/master/index.js
export const format = (function() {

  const regex = /(?=(YYYY|YY|MM|DD|HH|mm|ss|ms))\1([:\/]*)/g;

  const patterns = {
    YYYY: ['getFullYear', 4],
    YY: ['getFullYear', 2],
    MM: ['getMonth', 2, 1],
    DD: ['getDate', 2],
    HH: ['getHours', 2],
    mm: ['getMinutes', 2],
    ss: ['getSeconds', 2],
    ms: ['getMilliseconds', 3]
  };

  return function(pattern, date) {

    if (isEmpty(date)) {
      date = new Date();
    } else if (isString(date)) {
      date = new Date(date);
    }

    return pattern.replace(regex, function(match, key, rest) {
      const [ method, chars, add = 0 ] = patterns[key];
      const value = `00${String(date[method]() + add).padStart(chars, '0')}`;
      return value.slice(-chars) + (rest || '');
    });
  }

})();