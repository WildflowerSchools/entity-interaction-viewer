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

export function isElement(value) {
  return !!(value && value.nodeType === 1);
};

export function isEmpty(value) {
  if (isUndefined(value) || value === null || value === false || value === 0) {
    return true;
  }
  if (isArray(value) || isString(value)) {
    return value.length === 0;
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

export function pluck(key) {
  return array => Array.from(new Set(array.map(o => o[key])));
};

export function clone(source) {
  return Object.assign({}, source);
};

export function random(min, max) {
  if(arguments.length === 0) return Math.random();
  if(Array.isArray(min)) return min[ Math.floor(Math.random() * min.length) ];
  if(typeof min === 'undefined') min = 1;
  if(typeof max === 'undefined') max = min || 1, min = 0;
  return min + Math.random() * (max - min);
};
